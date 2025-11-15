import React,{useState,useEffect} from "react";

import { Link } from "react-router-dom";
import { Link as Link1 } from 'react-scroll';

import logo48 from "../../assets/images/logo-icon-48.png"
import logoDark from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png"

import {BsTelephone} from "../../assets/icons/vander"
import {FaEllipsisVertical} from "react-icons/fa6"
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function PortfolioAgencyNavbar(){
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
            <div className="container d-flex justify-content-between">
                <Link to="#contact" className="buy-button p-0 m-0">
                    <span className="btn btn-icon btn-pills btn-primary"><BsTelephone/></span>
                </Link>

                
				<Link className="logo m-0 p-0" to="/">
					<img src={logo48} alt=""/>
				</Link>
                

                
                <ul className="buy-button list-inline mb-0 p-0 m-0">
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
                            <img src={logoLight} className="dark-version" alt=""/>
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
                                                    <Link1 to="Home" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Home</Link1>
                                                </li>
                                                <li className="has-submenu">
                                                    <Link1 to="services" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">What we do?</Link1>
                                                </li>
                                                <li className="has-submenu">
                                                    <Link1 to="work" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Portfolio</Link1>
                                                </li>
                                                <li className="has-submenu">
                                                    <Link1 to="review" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Client's Review</Link1>
                                                </li>
                                                <li className="has-submenu">
                                                    <Link1 to="blog" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">News & Blogs</Link1>
                                                </li>
                                                <li className="has-submenu">
                                                    <Link1 to="contact" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Contact</Link1>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offcanvas-footer p-4 border-top text-center">
                                <p className="mb-0 text-muted">© {new Date().getFullYear()} Fronter. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                        
                    </Offcanvas.Body>
                        
                 </div>
            </Offcanvas>
            </div>
        </header>
    )
}