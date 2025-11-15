import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from 'react-scroll';
import logoDark from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png"

import Modal from 'react-bootstrap/Modal';

export default function CryptoNavbar(){
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
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky`}>
            <div className="container">
                <Link className="logo" to="/">
                    <span className="logo-light-mode">
                        <img src={logoDark} className="l-dark" alt=""/>
                        <img src={logoLight} className="l-light" alt=""/>
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
        
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                    <ul className="navigation-menu nav-light nav-right" id="navmenu-nav">
                        <li className="has-submenu">
                            <Link1 to="home" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Home</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="service" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Feature</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="token" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Token</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="testimonial" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Review</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link to="#" onClick={handleShow} className="sub-menu-item">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header> 

        <Modal show={show} onHide={handleClose} centered={true}>
            <Modal.Header closeButton>
            <Modal.Title><h5 className="modal-title" id="exampleModalCenterTitle">Contact Us </h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <p id="error-msg" className="mb-0"></p>
                    <div id="simple-msg"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Your Name <span className="text-danger">*</span></label>
                                <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Your Email <span className="text-danger">*</span></label>
                                <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                            </div> 
                        </div>

                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Subject</label>
                                <input name="subject" id="subject" className="form-control" placeholder="subject :"/>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Comments <span className="text-danger">*</span></label>
                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-grid">
                                <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>

        </>
    )
}