import React,{useState,useEffect} from "react";

import { Link,NavLink } from "react-router-dom";

import logoDark from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png"

import {AiOutlineShoppingCart,AiOutlineDribbble,AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile,} from "../../assets/icons/vander"
import {FaEllipsisVertical} from "react-icons/fa6"
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function PhotographyNavbar(){
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky`}>
        <div className="container">
            <Link className="logo" to="/">
                <span className="logo-light-mode">
                    <img src={logoDark} className="l-dark" alt=""/>
                    <img src={logoLight} className="l-light" alt=""/>
                </span>
                <img src={logoLight} className="logo-dark-mode" alt=""/>
            </Link>

            <ul className="buy-button list-inline mb-0">
                <li className="list-inline-item mb-0">
                    <Link to="#" onClick={handleShow}>
                        <span className="btn btn-icon btn-pills btn-primary"><FaEllipsisVertical/></span>
                    </Link>
                </li>
            </ul>

            <Offcanvas show={show} onHide={handleClose} placement="end"  className="offcanvas offcanvas-end photography-offcanvas bg-white shadow   ">
                 <div id="topnav" className="position-unset h-100">
                    <Offcanvas.Header closeButton className="offcanvas-header px-4 border-bottom">
                    <Offcanvas.Title>
                        <h5 id="offcanvasRightLabel" className="mb-0">
                            <img src={logoDark} className="light-version" alt=""/>
                            <img src={logoLight } className="dark-version" alt=""/>
                        </h5>
                    </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="h-100">
                        <div className="h-100">
                            <div className="container d-flex align-items-center justify-content-center" style={{height:"85%"}}>
                                <div className="row">
                                    <div className="col-12">
                                        <div id="navigation" className="toggle-menu bg-white"> 
                                            <ul className="navigation-menu toggle-menu-item" id="navmenu-nav">
                                                <li className="has-submenu">
                                                    <NavLink to="/index-photography" activeclassname="active">Home</NavLink>
                                                </li>
                                                <li className="has-submenu">
                                                    <NavLink to="/photography-about" activeclassname="active">About us</NavLink>
                                                </li>
                                                <li className="has-submenu">
                                                    <NavLink to="/photography-portfolio" activeclassname="active">Portfolio</NavLink>
                                                </li>
                                                <li className="has-submenu">
                                                    <NavLink to="/photography-contact" activeclassname="active">Contact</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offcanvas-footer p-4 border-top text-center">
                            <ul className="list-unstyled social-icon social mb-0">
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
                        
                    </Offcanvas.Body>
                        
                 </div>
            </Offcanvas>
        </div>
    </header>
    )
}