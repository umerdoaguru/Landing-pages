import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from 'react-scroll';
import logoDark from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png"

import {BiLogoFacebook, BiLogoInstagram, BiLogoTwitter,BiLogoLinkedinSquare,FiUser,FiMail} from "../../assets/icons/vander"

export default function Navbar(){
    const [scroll, setScroll] = useState(false);
    const [isMenu, setisMenu] = useState(false);

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
        <div className="tagline bg-white">
            <div className="container">                
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between">
                            <ul className="list-unstyled mb-0">
                                <li className="list-inline-item mb-0"><Link to="#" className="text-muted fw-normal"><FiMail className="fea icon-sm text-primary"/> support@Fronter.com</Link></li>
                            </ul>

                            <ul className="list-unstyled social-icon tagline-social mb-0">
                                <li className="list-inline-item mb-0"><Link to="#"><BiLogoFacebook className="mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link to="#"><BiLogoInstagram className="mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link to="#"><BiLogoTwitter className="mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link to="#"><BiLogoLinkedinSquare className="mb-0 icon"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky tagline-height`}>
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
                    <li className="list-inline-item ps-1 mb-0">
                        <Link to="https://1.envato.market/fronter-react" target="_blank">
                            <div className="btn btn-icon btn-pills btn-primary d-sm-none d-inline-flex"><FiUser className="fea icon-sm"/></div>
                            <div className="btn btn-primary d-none d-sm-block"><FiUser className="fea icon-sm"/> Sign in</div>
                        </Link>
                    </li>
                </ul>
        
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                    <ul className="navigation-menu nav-light" id="navmenu-nav">
                        <li className="has-submenu">
                            <Link1 to="home" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Home</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="features" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Feature</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="about" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">About Us</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="testimonial" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Reviews</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="news" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Blog</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="contact" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Contact</Link1>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}