import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

const PaymentPage = () => {
  const location = useLocation();
  const { cart, total } = location.state || { cart: [], total: 0 };
  console.log("Cart Data:", cart);
  const perGST = (total * 18) / 100;
  const totalAmount = parseFloat(total) + parseFloat(perGST);
  const ninePerGst = perGST / 2;
  const amountInRoundFigure = Math.round(totalAmount);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone_number: "",
    addresh: "",
  });
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [orderId, setOrderId] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone_number") {
      if (/^\d*$/.test(value)) {
        setUserDetails({ ...userDetails, [name]: value });
      }
    } else {
      setUserDetails({ ...userDetails, [name]: value });
    }
  };

  const makePayment = async (e) => {
    e.preventDefault();
    try {
      if (
        !userDetails.name ||
        !userDetails.email ||
        !userDetails.phone_number ||
        !userDetails.addresh
      ) {
        alert("Please fill in all the details to proceed with the payment.");
        return;
      }

      const keyResponse = await axios.get(
        "https://doaguru.com/api/payment/getKey"
      );
      const razorpayKey = keyResponse.data.key;

      const { data } = await axios.post(
        "https://doaguru.com/api/payment/createOrder",
        { amount: amountInRoundFigure, currency: "INR" }
      );

      const options = {
        key: razorpayKey,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "DOAGuru InfoSystems",
        description: "Purchase Transaction",
        order_id: data.order.id,
        handler: async (response) => {
          setOrderId(response.razorpay_order_id);
          setPaymentId(response.razorpay_payment_id);

          const verifyPayload = {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
            userDetails,
            productName: cart.map((item) => item.name).join(", "),
            plan_name: cart.map((item) => item.title).join(", "),
            duration: cart.map((item) => item.duration).join(", "),
            amount: amountInRoundFigure,
          };

          try {
            const verifyResponse = await axios.post(
              "https://doaguru.com/api/payment/verifyPayment",
              verifyPayload
            );
            if (verifyResponse.data.success) {
              const subscriptionPayload = {
                name: userDetails.name,
                email: userDetails.email,
                phone_number: userDetails.phone_number,
                addresh: userDetails.addresh,
                order_id: response.razorpay_order_id,
                payment_id: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                product_name: cart.map((item) => item.name).join(", "),
                plan_name: cart.map((item) => item.title).join(", "),
                duration: cart.map((item) => item.duration).join(", "),
                amount: amountInRoundFigure,
              };

              try {
                const subscriptionResponse = await axios.post(
                  "https://subscription.dentalguru.software/api/auth/createUserAndPayment",
                  subscriptionPayload
                );
                console.log(
                  "Subscription API response:",
                  subscriptionResponse.data
                );
              } catch (error) {
                console.error(
                  "Error sending payment details to subscription API:",
                  error
                );
              }
            } else {
              alert("Payment verification failed. Details not saved.");
            }
          } catch (error) {
            console.error("Error verifying payment:", error);
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          phone_number: userDetails.phone_number,
          addresh: userDetails.addresh,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", () => {
        setIsProcessing(false);
      });

      rzp.open();
      setIsProcessing(false);
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Failed to initiate payment. Please try again.");
      setIsProcessing(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    try {
      // Process logic
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/"; // fallback if no history
    }
  };

  return (
    <Wrapper>
      <button className="btn btn-outline-secondary m-4" onClick={goBack}>
        <IoMdArrowRoundBack /> Back
      </button>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            {paymentStatus === "success" ? (
              <div className="text-center">
                <h2>Thank You for Your Payment!</h2>
                <p>Your payment was successful.</p>
                <p>
                  <strong>Order ID:</strong> {orderId}
                </p>
                <p>
                  <strong>Payment ID:</strong> {paymentId}
                </p>
                <button
                  className="btn btn-success mt-3"
                  onClick={() => window.print()}
                >
                  Print Receipt
                </button>
              </div>
            ) : (
              <form onSubmit={makePayment}>
                <div className="card shadow-sm p-4">
                  <h2 className="text-center">Enter Your Details</h2>

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone_number" className="form-label">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone_number"
                      name="phone_number"
                      value={userDetails.phone_number}
                      onChange={handleInputChange}
                      placeholder="Enter your 10 digit contact number"
                      pattern="[0-9]{10}"
                      title="Mobile number should be 10 digits"
                      maxLength={10}
                      minLength={10}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="addresh" className="form-label">
                      Addresh
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="addresh"
                      name="addresh"
                      value={userDetails.addresh}
                      onChange={handleInputChange}
                      placeholder="Type your address"
                      required
                    />
                  </div>

                  <div className="mt-2">
                    <h5>Order Summary</h5>
                    <ul className="list-group mb-3">
                      {cart.map((item) => (
                        <li
                          key={item.id}
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <div>
                            {item.name}
                            <br />
                            {item.title}
                            <br />
                            {item.duration} Days
                            <div>
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  color: "red",
                                  fontSize: "1.1rem",
                                }}
                              >
                                ₹{item.finalPrice || 0}
                              </span>
                              <span
                                className="ms-2"
                                style={{
                                  color: "green",
                                  fontWeight: "bold",
                                  fontSize: "1.2rem",
                                }}
                              >
                                ₹{total}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="border-top pt-3">
                      <p>SGST (9%): ₹{ninePerGst.toFixed(2)}</p>
                      <p>CGST (9%): ₹{ninePerGst.toFixed(2)}</p>
                      <p>Total GST (18%): ₹{perGST.toFixed(2)}</p>
                      <h5>Total Amount: ₹{totalAmount.toFixed(2)}</h5>
                    </div>

                    {isProcessing && (
                      <p className="text-danger text-center mt-3">
                        Please wait... Do not refresh or go back.
                      </p>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mt-4"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Loading..." : `Proceed to Pay`}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PaymentPage;

const Wrapper = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;

  .card {
    background: #ffffff;
    border-radius: 10px;
  }
`;
