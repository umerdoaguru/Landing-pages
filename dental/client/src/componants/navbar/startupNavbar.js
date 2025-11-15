import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from 'react-scroll';

import logoDark from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png"

export default function StartupNavbar(){
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
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky bg-white`}>
        <div className="container">
            <Link className="logo" to="/">
                <img src={logoDark} className="logo-light-mode" alt=""/>
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
                <ul className="navigation-menu nav-right " id="navmenu-nav">
                    <li className="has-submenu">
                        <Link1 to="home" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Home</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 to="about" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">About Us</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 to="features" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Feature</Link1>
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
    )
}