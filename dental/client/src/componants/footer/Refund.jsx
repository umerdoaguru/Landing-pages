import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Refund = () => {
  return (
    <>
      <Container>
        <div className="container">
          <h1 className="mb-4 mt-5 text-center">Refund & Cancellation Policy</h1> 
          <p>
            Given the nature of digital content, a refund or credit on a
            purchase is not granted unless a refund is required under the Indian
            consumer law or other relevant consumer protection laws.
          </p>
          <br />
          <p>
            We will assess refund or credit requests (if you have a
            <span className="margin"></span>
            <Link to="https://dentalguru1.doaguru.com">
              https://dentalguru1.doaguru.com
            </Link>
            ) on their merits, considering the digital nature of our services
            and the type of service preview that was available before purchase.
            There is generally no obligation to provide a refund or credit in
            situations like the following:
            <li>You have changed your mind about an item;</li>
            <li>You bought an item by mistake;</li>
            <li>You do not have sufficient expertise to use the item;</li>
            <li>You ask for goodwill</li>
          </p>
          <p>
            If we decide to issue a refund or credit (if you have a
            <span className="margin"></span>
            <Link to="https://dentalguru1.doaguru.com">
              https://dentalguru1.doaguru.com
            </Link>
            ), this will generally be done using the same manner used to make
            the purchase. So if the item was bought using a particular payment
            method, you will be refunded using the same payment method in
            reverse. Any payment made to you will be made in INR, under the
            rules of the payment method taking into consideration the currency
            conversion rates back to your local currency.
          </p>
          <p>
            Cancellations can only be done in Offline mode. Cancellations will
            only be accepted if raised within 48 hrs of purchase. For
            cancellations, the user would be required to raise a ticket either
            through mail <b>info@doaguru.com</b> or approach us on tele at{" "}
            <span className="margin"></span>
            <Link to="tel:+91-7440992424">+91-7440992424</Link>
            <br />
            All refunds would be processed within 14 days on receipt of valid
            cancellation request.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Refund;
const Container = styled.div`
  p {
    /* color: #7d858c; */
    color: "#000000";
    font-size: 18px;
    font-family: "Lato";
  }
  span {
    color: chocolate;
    font-size: 1.1rem;
    font-weight: 700;
  }
  .colors {
    color: "#E99FOE";
  }
  .margin {
    margin-left: 5px;
  }
`;
