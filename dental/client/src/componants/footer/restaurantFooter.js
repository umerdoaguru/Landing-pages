import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-icon-100.png"
import {AiOutlineShoppingCart,AiOutlineDribbble,AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile} from "../../assets/icons/vander"

export default function RestaurantFooter(){
    return(
        <footer className="bg-footer">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-py-60">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="text-center">
                                    <h5 className="footer-head fw-semibold mb-4">Open Hours</h5>
                                    <p className="mb-2">Monday - Friday: 10 AM - 11 PM</p>
                                    <p className="mb-0">Saturday - Sunday: 9 AM - 1 PM</p>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="text-center">
                                    <h5 className="footer-head fw-semibold mb-4">Reservation</h5>
                                    <p className="mb-2"><Link to="tel:+152534-468-854" className="text-foot">+152 534-468-854</Link></p>
                                    <p className="mb-0"><Link to="mailto:contact@example.com" className="text-foot">contact@example.com</Link></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                <div className="text-center">
                                    <h5 className="footer-head fw-semibold mb-4">Address</h5>
                                    <p className="mb-2">Fronter Restaurant</p>
                                    <p className="mb-0">C/54 Northwest Freeway, Suite 558, USA 485</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="row justify-content-center mt-5">
                            <div className="col">
                                <div className="text-center">
                                    <img src={logo} className="d-block mx-auto" alt=""/>
                                    <p className="para-desc mx-auto mb-0 mt-4">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <ul className="list-unstyled text-center social-icon foot-social-icon mb-0">
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