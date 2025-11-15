import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import background from "../assets/images/saas-shape.png";
import Doctor from "../assets/images/app/dentalgurupro.png";
import Resepnist from "../assets/images/app/dentalgurulite.png";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdKeyboardArrowRight, FiPlay } from "../assets/icons/vander";

import styled from "styled-components";
import HomeNavbar from "../componants/navbar/HomeNavbar";
import Footer from "../componants/footer/footer";

export default function IndexSaas() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  });
  return (
    <>
      <Container>
        {/* <SaasNavbar /> */}
        <HomeNavbar />
        <Helmet>
          <title>
            Best Dental Practice Management Software for Clinics & Hospitals
          </title>
          <link rel="canonical" href="https://dentalguru.software/" />
        </Helmet>

        <section
          className="bg-home bg-primary  d-flex align-items-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center hero">
                <div className="title-heading mt-3 ">
                  <h1 className="heading text-white title-dark"> 
                    Best Dental Practice Management Software for Dental Clinics &
                    Hospitals 
                  </h1>
                </div>
                <div className="col-lg-12 ">
                  <div className="row ">
                    <div className="col-lg-6 col-12 ">
                      <div className="home-dashboard">
                        <img src={Doctor} alt="" className="img-fluid" />
                      </div>
                      <h2 style={{ color: "#F5F5F5" }}>DentalGuru Pro</h2>

                      <span className="gap-2">
                       <div>
                        <h6 className="text-white">Choose Pro if you have one or more branches with dedicated staff like accountants, laboratory manager, admin, one or more doctors </h6>
                        </div>
                        <div className="">
                        <Link
                          to="/Best-Dental-Practice-Management-Software"
                          className="btn btn-success shimmer-effect"
                        >
                          Explore More <MdKeyboardArrowRight />
                        </Link>
                        </div>
                      </span>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="home-dashboard ">
                        <img src={Resepnist} alt="" className="img-fluid " />
                        <h2 className="dentallite "> DentalGuru Lite</h2>

                        <span className="gap-2">
                        <div>
                        <h6 className="text-white">Choose lite if you or you and your receptionist manage the clinic.</h6>
                        {/* <p className="text-white">Easily manage patients—perfect for doctors and their receptionist.</p> */}
                        </div>
                        <div className="mt-4">
                          <Link
                            to="/Best-Dental-Clinic-Management-Software"
                            className="btn btn-success shimmer-effect"
                          >
                            Explore More <MdKeyboardArrowRight />
                          </Link>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  .shimmer-effect {
    animation: shimmer 12s linear infinite;
    background: linear-gradient(
      to right,
      #2a52c3 0%,
      #6a89cc 20%,
      #2a52c3 40%,
      #2a52c3 100%
    );
    background-size: 200% 100%;
  }

  .bg {
    background-image: url("../assets/images/brands/offer50.png");
    background-size: cover;
  }
  .dentallite {
    color: white;
  }

  .bg-home {
    height: 880px;
  }

  @media (min-width: 768px) and (max-width: 990px) {
    .bg {
      background-image: url("../assets/images/brands/offer50.png");
      background-size: 300px 100px;
    }

    .bg-home {
      height: 1850px;
    }
  }
  @media (min-width: 990px) and (max-width: 1024px) {
    .hero {
      margin-top: 10rem;
    }
    .bg-home {
      height: 895px;
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    .bg-home {
      height: 1455px;
    }
    .bg {
      background-image: url("../assets/images/brands/offer50.png");
      background-size: 300px 100px;
    }

    // section {
    //   margin-top: 20rem;
    // }
  }
`;
