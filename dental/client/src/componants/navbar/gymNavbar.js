import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from 'react-scroll';
import logoDark from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png"
import pilates from "../../assets/images/gym/Pilates-bro.svg" 

import {AiOutlineShoppingCart,AiOutlineDribbble,AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile,AiOutlineClose,FiSettings} from "../../assets/icons/vander"

import Offcanvas from 'react-bootstrap/Offcanvas';

export default function GymNavbar(){
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
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky `}>
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

                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item mb-0">
                        <Link to="#" onClick={handleShow} >
                            <div className="btn btn-icon btn-pills btn-primary"><FiSettings className="fea icon-sm"/></div>
                        </Link>
                    </li>
                </ul>
        
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>   
                    <ul className="navigation-menu nav-right nav-light" id="navmenu-nav">
                        <li className="has-submenu">
                            <Link1 to="home" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Home</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="about" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">About Us</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="schedule" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Schedule</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="team" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Trainer</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="testimonial" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Testimonial</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="blog" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Blog & News</Link1>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header className="border-bottom">
                <Offcanvas.Title style={{width:"100%"}} >
                 <div className="d-flex justify-content-between align-items-center">
                    <h5 id="offcanvasRightLabel" className="mb-0">
                        <img src={logoDark} className="light-version" alt=""/>
                        <img src={logoLight} className="dark-version" alt=""/>
                    </h5>
                    <button onClick={()=>setShow(false)} type="button" className="btn-close d-flex align-items-center text-dark" data-bs-dismiss="offcanvas" aria-label="Close"><AiOutlineClose className="fs-4"/></button>
                 </div>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="row">
                    <div className="col-12">
                        <img src={pilates} className="img-fluid d-block mx-auto" style={{maxWidth:"256px"}} alt=""/>
                        <div className="card border-0 mt-5 z-index-1">
                            <div className="card-body p-0">
                                <form>
                                    <p id="error-msg" className="mb-0"></p>
                                    <div id="simple-msg"></div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                                            </div>
                                        </div>
    
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                                            </div> 
                                        </div>
    
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Subject</label>
                                                <input name="subject" id="subject" className="form-control" placeholder="subject :"/>
                                            </div>
                                        </div>
    
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Comments <span className="text-danger">*</span></label>
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
                            </div>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
            
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
        </Offcanvas>
        </>
    )
}