import React from "react";
import { Link } from "react-router-dom";

import logolight from "../../assets/images/logo-light.png"
import logo48 from "../../assets/images/logo-icon-48.png"

import {AiOutlineMobile,FaGooglePlay,BiLogoApple,AiOutlineShoppingCart,AiOutlineDribbble,AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile,MdOutlineKeyboardArrowRight,MdArrowForward} from "../../assets/icons/vander"

export default function CryptoFooter(){
    return(
        <footer className="bg-footer">
             <div className="container-fluid px-0">
                <div className="py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="section-title">
                                    <div className="d-flex">
                                        <AiOutlineMobile className="display-4 text-white title-dark"/>
                                        <div className="flex-1 ms-md-4 ms-3">
                                            <h4 className="fw-semibold text-light title-dark mb-1">Download our app now !</h4>
                                            <p className="text-white-50 mb-0">Install our Fronter app and grow your portfolio with Fronter and earn more n more !</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="col-md-4 mt-4 mt-sm-0">
                                <div className="text-md-end ms-5 ms-sm-0">
                                    <Link to="#" className="btn btn-primary m-1"><BiLogoApple/> App Store</Link>
                                    <Link to="#" className="btn btn-soft-primary m-1"><FaGooglePlay/> Play Store</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60 footer-border">
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <Link to="#" className="logo-footer">
                                        <img src={logolight} alt=""/>
                                    </Link>
                                    <p className="mt-4">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                        <li className="list-inline-item me-1"><Link to="https://1.envato.market/fronter-react" target="_blank" className="rounded"><AiOutlineShoppingCart className="align-middle"/></Link></li>
                                        <li className="list-inline-item me-1"><Link to="https://dribbble.com/shreethemes" target="_blank" className="rounded"><AiOutlineDribbble/></Link></li>
                                        <li className="list-inline-item me-1"><Link to="https://www.behance.net/shreethemes" target="_blank" className="rounded"><AiOutlineBehance/></Link></li>
                                        <li className="list-inline-item me-1"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"><AiFillLinkedin/></Link></li>
                                        <li className="list-inline-item me-1"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><BiLogoFacebook/></Link></li>
                                        <li className="list-inline-item me-1"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><AiOutlineInstagram/></Link></li>
                                        <li className="list-inline-item me-1"><Link to="https://twitter.com/shreethemes" target="_blank" className="rounded"><AiOutlineTwitter/></Link></li>
                                        <li className="list-inline-item me-1"><Link to="mailto:support@shreethemes.in" className="rounded"><FiMail/></Link></li>
                                        <li className="list-inline-item me-1"><Link to="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="rounded"><AiOutlineFile/></Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Company</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link to="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> About us</Link></li>
                                        <li><Link to="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Services</Link></li>
                                        <li><Link to="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Team</Link></li>
                                        <li><Link to="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Pricing</Link></li>
                                        <li><Link to="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Project</Link></li>
                                        <li><Link to="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Careers</Link></li>
                                        <li><Link to="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Blog</Link></li>
                                        <li><Link to="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Login</Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Usefull Links</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link to="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Terms of Services</Link></li>
                                        <li><Link to="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Privacy Policy</Link></li>
                                        <li><Link to="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Documentation</Link></li>
                                        <li><Link to="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Changelog</Link></li>
                                        <li><Link to="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Components</Link></li>
                                    </ul>
                                </div>
            
                                <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Start project with Fronter</h5>

                                    <ul className="list-unstyled footer-list mt-4 mb-2">
                                        <li className="list-inline-item mx-1"><Link to="#" className="btn btn-soft-primary">Signin</Link></li>
                                        <li className="list-inline-item mx-1"><Link to="#" className="btn btn-primary">Signup</Link></li>
                                    </ul>
                                    <small className="d-block">Are you developer ? <Link to="#" className="text-foot fw-semibold">Learn More <MdArrowForward/></Link></small>

                                    <img src={logo48} className="mt-4" alt=""/>
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
                                <p className="mb-0">© {new Date().getFullYear()} Fronter. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}