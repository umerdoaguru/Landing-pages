import React from "react";
import { Link } from "react-router-dom";

import logolight from "../../assets/images/logo-light.png";
import logo48 from "../../assets/images/logo-icon-48.png";

import {
  TbMailStar,
  AiOutlineShoppingCart,
  AiOutlineDribbble,
  AiOutlineBehance,
  AiFillLinkedin,
  BiLogoFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  FiMail,
  AiOutlineFile,
  MdOutlineKeyboardArrowRight,
  MdArrowForward,
} from "../../assets/icons/vander";

export default function Footer() {
  return (
    <footer className="bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-py-60 footer-border">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                  <Link to="#" className="logo-footer">
                    {/* <img src={logolight} alt="" /> */}
                    <img
                      src="/dental3.webp"
                      alt="Description of the image"
                      className="ms-lg-5 ms-md-0"
                      style={{ height: "100px" }}
                    />
                  </Link>
                  <p className="mt-4">
                    Get started with DentalGuru, your all-in-one solution for
                    boosting patient engagement, attracting more appointments,
                    and enhancing connections within your dental practice.
                  </p>
                  <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                    <li className="list-inline-item me-1">
                      <Link
                        to="https://www.linkedin.com/company/doaguru-info-sys/?original_referer=https%3A%2F%2Fdoaguru.com%2F"
                        target="_blank"
                        className="rounded"
                      >
                        <AiFillLinkedin />
                      </Link>
                    </li>
                    <li className="list-inline-item me-1">
                      <Link
                        to="https://www.facebook.com/doagurujabalpur/"
                        target="_blank"
                        className="rounded"
                      >
                        <BiLogoFacebook />
                      </Link>
                    </li>
                    <li className="list-inline-item me-1">
                      <Link
                        to="https://www.instagram.com/doaguruinfosystems/?hl=en"
                        target="_blank"
                        className="rounded"
                      >
                        <AiOutlineInstagram />
                      </Link>
                    </li>
                    <li className="list-inline-item me-1">
                      <Link
                        to="https://twitter.com/i/flow/login?redirect_after_login=%2Fdoagurus"
                        target="_blank"
                        className="rounded"
                      >
                        <AiOutlineTwitter />
                      </Link>
                    </li>
                    <li className="list-inline-item me-1">
                      <Link
                        to="https://www.pinterest.com/doaguru/?invite_code=40f3f21e021f41a2a72b30b8dbee9d9b&sender=614530449062265269"
                        target="_blank"
                        className="rounded"
                      >
                        <AiOutlineFile />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-3  col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="footer-head">Usefull Links</h5>
                  <ul className="list-unstyled footer-list mt-4">
                    {/* <li>
                      <Link to="features" className="text-foot" id="features">
                        <MdOutlineKeyboardArrowRight className="me-1" /> FEATURE
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-foot">
                        <MdOutlineKeyboardArrowRight className="me-1" />
                        {""}
                        TESTIMONIAL
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-foot">
                        <MdOutlineKeyboardArrowRight className="me-1" />
                        PRICING
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-foot">
                        <MdOutlineKeyboardArrowRight className="me-1" />
                        Demo
                      </Link>
                    </li>
                    */}
                    <li>
                      <Link to="/Privacy" className="text-foot">
                        <MdOutlineKeyboardArrowRight className="me-1" />
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/Refund" className="text-foot">
                        <MdOutlineKeyboardArrowRight className="me-1" />
                        Refund & Cancellation Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/hippa" className="text-foot">
                        <MdOutlineKeyboardArrowRight className="me-1" />
                        HIPPA
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Best-Dental-Practice-Management-Software"
                        className="text-foot"
                      >
                        <MdOutlineKeyboardArrowRight className="me-1" />
                        DentalGuru Pro
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Best-Dental-Clinic-Management-Software"
                        className="text-foot"
                      >
                        <MdOutlineKeyboardArrowRight className="me-1" />
                        DentalGuru Lite
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="footer-head">Get in touch <Link to ="https://docs.google.com/document/d/1bEZfICGNQlQkBsNNQnJlc1HAyj4rjHem3f3cEUEvd9E/edit?usp=sharing" style={{color:'#F5F5F5'}}>!</Link></h5>
                  <ul className="list-unstyled footer-list mt-4">
                    <li>
                      <Link to="#" className="text-foot">
                        <MdOutlineKeyboardArrowRight className="me-1" />
                        1815 Wright Town, Jabalpur, M.P INDIA 482002
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-foot">
                        <MdOutlineKeyboardArrowRight className="me-1" />{" "}
                        +91-7440992424
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-foot">
                        <MdOutlineKeyboardArrowRight className="me-1" />{" "}
                        +91-7477253424
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-foot">
                        <MdOutlineKeyboardArrowRight className="me-1" />{" "}
                        info@doaguru.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-py-30 footer-bar">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="text-center">
                <p className="mb-0">
                  <Link
                    to="/Admin-Login"
                    style={{ color: "#Adbcbd", textDecoration: "none" }}
                  >
                    © {new Date().getFullYear()} Design & Develop with
                  </Link>
                  <i className="mdi mdi-heart text-danger"></i> by
                  <Link
                    to="https://doaguru.com/"
                    target="_blank"
                    className="text-reset"
                  >
                    DOAGuru InfoSystems
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
