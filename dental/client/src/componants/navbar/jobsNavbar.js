import React,{useState,useEffect} from "react";
import { Link,NavLink } from "react-router-dom";

import logoDark from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png"

import {FiUser} from "../../assets/icons/vander"

export default function JobsNavbar(){
    const [scroll, setScroll] = useState(false);
    const [isMenu, setisMenu] = useState(false)

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
                    <Link to="/auth-login"><div className="btn btn-icon btn-pills btn-primary"><FiUser className="fea icon-sm"/></div></Link>
                </li>
            </ul>
    
            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                <ul className="navigation-menu nav-light nav-right">
                    <li className="has-submenu">
                        <Link to="/index-job" className="sub-menu-item">Home</Link>
                    </li>
                    <li className="has-submenu">
                        <NavLink to="/jobs" activeclassname="active">Jobs</NavLink>
                    </li>
                    <li className="has-submenu">
                        <NavLink to="/job-detail" activeclassname="active">Job Detail</NavLink>
                    </li>
                    <li className="has-submenu">
                        <NavLink to="/job-apply" activeclassname="active">Job Apply</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    )
}