import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import {Link as Link1} from "react-scroll"

import logoDark from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png"

import {FiUser} from "../../assets/icons/vander"

export default function CoWorkingNavbar(){
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
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky`}>
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
            <ul className="buy-button list-inline mb-0">
                <li className="list-inline-item ps-1 mb-0">
                    <Link to="/auth-login"><div className="btn btn-icon btn-pills btn-primary"><FiUser className="fea icon-sm"/></div></Link>
                </li>
            </ul>
    
            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                <ul className="navigation-menu nav-right" id="navmenu-nav">
                    <li className="has-submenu">
                        <Link1 activeClass="active" smooth={true} spy={true} to="home">Home</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 activeClass="active" smooth={true} spy={true} to="about">About Us</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 activeClass="active" smooth={true} spy={true} to="features">Feature</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 activeClass="active" smooth={true} spy={true} to="testimonial">Reviews</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 activeClass="active" smooth={true} spy={true} to="news">Blog</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 activeClass="active" smooth={true} spy={true} to="contact">Contact</Link1>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    )
}