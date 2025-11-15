import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import background from "../assets/images/bg/08.jpg";
import { Parallax } from "react-parallax";
import { BsTelephone, FiMail, FiMapPin } from "../assets/icons/vander";
import Footer from "../componants/footer/footer";
import ScrollTop from "../componants/scrollTop";
import HomeNavbar from "../componants/navbar/HomeNavbar";

export default function Contactus() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://dentalguru.software/api/auth/contact`,
        data
      );
      console.log(res.data);
      alert("Book for Demo is Done!");
      
      setTimeout(() => {
        window.location.href = "https://dentalguru.software/";
      }, 500); 
  
      // Reset the form data
      setData({
        name: "",
        phone: "",
        email: "",
        city: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HomeNavbar />
      <section className="position-relative overflow-hidden">
        <Parallax
          blur={{ min: 0, max: 0 }}
          bgImage={background}
          bgImageAlt="the dog"
          strength={500}
          bgportfolioImageize="100%"
          bgStyle={{
            width: "auto",
            height: "100%",
            backgroundPosition: "center center", // Centers the image
            backgroundSize: "cover",
          }}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        ></Parallax>
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="bg-half-170 d-table w-100">
          <div className="container">
            <div className="row mt-5 justify-content-center">
              <div className="col-12">
                <div className="title-heading text-center">
                  <p className="text-white-50 para-desc mx-auto mb-0">
                    Demonstration for DentalGuru software.
                  </p>
                  <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                    Book A Demo
                  </h5>
                </div>
              </div>
            </div>
            <div className="position-middle-bottom">
              <nav aria-label="breadcrumb" className="d-block">
                <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">DentalGuru</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    DentalGuru
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <section className="section pb-0"></section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="p-5 rounded shadow-lg"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <h3
                className="text-center mb-4"
                style={{ fontWeight: "bold", color: "#343a40" }}
              >
                Get in Touch
              </h3>
              <form onSubmit={handleSubmit}>
                <p className="mb-0" id="error-msg"></p>
                <div id="simple-msg"></div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label
                        className="form-label"
                        style={{ fontWeight: "500", color: "#495057" }}
                      >
                        Your Name <span className="text-danger">*</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={data.name}
                        onChange={handleChange}
                        className="form-control rounded-pill"
                        style={{ padding: "10px 20px" }}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label
                        className="form-label"
                        style={{ fontWeight: "500", color: "#495057" }}
                      >
                        Your Email <span className="text-danger">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={data.email}
                        onChange={handleChange}
                        className="form-control rounded-pill"
                        style={{ padding: "10px 20px" }}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label
                        className="form-label"
                        style={{ fontWeight: "500", color: "#495057" }}
                      >
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        name="phone"
                        type="text"
                        value={data.phone}
                        onChange={handleChange}
                        className="form-control rounded-pill"
                        style={{ padding: "10px 20px" }}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label
                        className="form-label"
                        style={{ fontWeight: "500", color: "#495057" }}
                      >
                        City <span className="text-danger">*</span>
                      </label>
                      <input
                        name="city"
                        type="text"
                        value={data.city}
                        onChange={handleChange}
                        className="form-control rounded-pill"
                        style={{ padding: "10px 20px" }}
                        placeholder="Enter your City"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary btn-hover rounded-pill"
                        style={{
                          backgroundColor: "#007bff",
                          border: "none",
                          padding: "10px 20px",
                          fontSize: "16px",
                          fontWeight: "600",
                          transition: "all 0.3s ease-in-out",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#0056b3")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "#007bff")
                        }
                      >
                        Book A Demo
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card border-0 text-center features feature-primary feature-clean">
              <div className="icons bg-lg text-center rounded-lg mx-auto">
                <BsTelephone className="icon d-block h3 mb-0" />
              </div>
              <div className="content mt-4 pt-2 px-4">
                <h5 className="mb-3">Phone</h5>
                <Link to="tel:+91-7477253424" className="link">
                  +91-7477253424
                </Link>
                <br />
                <Link to="tel:+91-7440992424" className="link">
                  +91-7440992424
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mt-5 mt-sm-0">
            <div className="card border-0 text-center features feature-primary feature-clean">
              <div className="icons bg-lg text-center rounded-lg mx-auto">
                <FiMail className="icon d-block h3 mb-0" />
              </div>
              <div className="content mt-4 pt-2 px-4">
                <h5 className="mb-3">Email</h5>
                <Link to="mailto: info@doaguru.com" className="link">
                  info@doaguru.com
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mt-5 mt-lg-0">
            <div className="card border-0 text-center features feature-primary feature-clean">
              <div className="icons bg-lg text-center mx-auto rounded-lg">
                <FiMapPin className="icon d-block h3 mb-0" />
              </div>
              <div className="content mt-4 pt-2 px-4">
                <h5 className="mb-3">Location</h5>
                <Link
                  to="https://www.google.com/maps/dir//1815,+Wright+Town,+Jabalpur,+Madhya+Pradesh+482002"
                  className="lightbox text-primary"
                >
                  View on Google map
                </Link>
                <p className="text-muted">
                  1815, Wright Town, Jabalpur, <br />
                  Madhya Pradesh 482002
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </>
  );
}
