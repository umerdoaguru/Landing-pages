import React from "react";
import { Link } from "react-router-dom";

import logoLight from "../../assets/images/logo-light.png"

import {FiShoppingCart,FiDribbble,AiOutlineBehance,AiFillLinkedin,FaFacebookF,AiOutlineInstagram, AiOutlineTwitter,FiFileText,FiMail} from "../../assets/icons/vander"

export default function Footer(){
    return(
        <>
        <footer className="bg-footer footer-bar">
            <div className="footer-py-30">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-sm-3">
                            <div className="text-sm-start">
                                <Link to="#" className="logo-footer">
                                    <img src={logoLight} alt=""/>
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="text-center">
                                <p className="mb-0">© {new Date().getFullYear()} Fronter. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
    
                        <div className="col-sm-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <ul className="list-unstyled social-icon foot-social-icon text-sm-start mb-0">
                                <li className="list-inline-item ms-1"><Link to="https://1.envato.market/fronter-react " target="_blank" className="rounded"><FiShoppingCart className=""/></Link></li>
                                <li className="list-inline-item ms-1"><Link to="https://dribbble.com/shreethemes" target="_blank" className="rounded"><FiDribbble/></Link></li>
                                <li className="list-inline-item ms-1"><Link to="https://www.behance.net/shreethemes" target="_blank" className="rounded"><AiOutlineBehance/></Link></li>
                                <li className="list-inline-item ms-1"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"><AiFillLinkedin/></Link></li>
                                <li className="list-inline-item ms-1"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><FaFacebookF/></Link></li>
                                <li className="list-inline-item ms-1"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><AiOutlineInstagram/></Link></li>
                                <li className="list-inline-item ms-1"><Link to="https://twitter.com/shreethemes" target="_blank" className="rounded"><AiOutlineTwitter/></Link></li>
                                <li className="list-inline-item ms-1"><Link to="mailto:support@shreethemes.in" className="rounded"><FiMail/></Link></li>
                                
                                <li className="list-inline-item ms-1"><Link to="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="rounded"><FiFileText/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}