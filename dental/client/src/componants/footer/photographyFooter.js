import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/photography/footer.jpg"

import {AiOutlineShoppingCart,AiOutlineDribbble,AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile} from "../../assets/icons/vander"

export default function PhotographyFooter(){
    return(
        <footer style={{backgroundImage:`url(${background})`}}>
            <div className="bg-overlay bg-linear-gradient-3"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60">
                            <Link to="mailto:contact@example.com" className="btn btn-link light text-light title-dark h4 mb-0">contact@example.com</Link>

                            <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-5">
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

            <div className="footer-py-30 footer-bar">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="text-sm-start">
                                <p className="mb-0">© {new Date().getFullYear()} Fronter. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}