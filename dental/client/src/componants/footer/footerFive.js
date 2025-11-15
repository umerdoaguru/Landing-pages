import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-light.png"

export default function FooterFive(){
    return(
        <footer className="bg-footer footer-bar">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-30">
                            <div className="container text-center">
                                <div className="row align-items-center">
                                    <div className="col-sm-6">
                                        <div className="text-sm-start">
                                            <Link to="#" className="logo-footer">
                                                <img src={logo} alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                
                                    <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                        <ul className="list-unstyled footer-list terms-service text-sm-end mb-0">
                                            <li className="list-inline-item mb-0"><Link to="/jobs" className="text-foot me-3">Jobs</Link></li>
                                            <li className="list-inline-item mb-0"><Link to="#" className="text-foot me-3">Companies</Link></li>
                                            <li className="list-inline-item mb-0"><Link to="/page-faqs" className="text-foot me-3">FAQs</Link></li>
                                            <li className="list-inline-item mb-0"><Link to="/page-contact-one" className="text-foot">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-border">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <p className="mb-0">© {new Date().getFullYear()} Fronter. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}