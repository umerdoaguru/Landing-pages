import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from 'react-scroll';
import logoDark from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png"
import aboutImg from "../../assets/images/business/about01.jpg"

import {FiPhoneCall} from "../../assets/icons/vander"

import Modal from 'react-bootstrap/Modal';

export default function StudioNavbar(){
    const [scroll, setScroll] = useState(false);
    const [isMenu, setisMenu] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);

      const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };

    return(
    <>
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll `}>
            <div className="container">
                <Link className="logo" to="/">
                    <span className="logo-light-mode">
                        <img src={logoDark} alt=""/>
                    </span>
                    <img src={logoLight} className="logo-dark-mode" alt=""/>
                </Link>

            
                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item ps-1 mb-0">
                        <Link to="#!" onClick={handleShow}>
                            <div className="btn btn-icon btn-pills btn-primary d-sm-none d-inline-flex"><FiPhoneCall className="fea icon-sm"/></div>
                            <div className="btn btn-primary rounded-0 d-none d-sm-block">Start a Project</div>
                        </Link>
                    </li>
                </ul>
        
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>   
                    <ul className="navigation-menu nav-right" id="navmenu-nav">
                        <li className="has-submenu">
                            <Link1 to="home" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Home</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="features" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Feature</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="portfolio" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Portfolio</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="review" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Reviews</Link1>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <Modal
                show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
            <Modal.Body>
                <div className="container-fluid px-0">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-6 col-md-5">
                            <img src={aboutImg} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-6 col-md-7">
                            <form className="ms-md-3 ms-0 mt-md-0 mt-3">
                                <p id="error-msg" className="mb-0"></p>
                                <div id="simple-msg"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-normal">Your Name <span className="text-danger">*</span></label>
                                            <input name="name" id="name" type="text" className="form-control rounded-0" placeholder="Name :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-normal">Your Email <span className="text-danger">*</span></label>
                                            <input name="email" id="email" type="email" className="form-control rounded-0" placeholder="Email :"/>
                                        </div> 
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-normal">Subject</label>
                                            <input name="subject" id="subject" className="form-control rounded-0" placeholder="subject :"/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-normal">Comments <span className="text-danger">*</span></label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control rounded-0" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button type="submit" id="submit" name="send" className="btn btn-primary rounded-0">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </>
    )
}