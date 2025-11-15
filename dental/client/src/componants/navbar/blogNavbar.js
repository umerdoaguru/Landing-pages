import React,{useState,useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import logoDark from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png"

import {AiOutlineShoppingCart} from "../../assets/icons/vander"

export default function BlogNavbar(){
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
                        <div className="btn btn-icon btn-pills btn-primary d-sm-none d-inline-flex"><AiOutlineShoppingCart/></div>
                        <div className="btn btn-pills btn-primary d-none d-sm-block"><AiOutlineShoppingCart/> Buy Now</div>
                    </Link>
                </li>
            </ul>
    
            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                <ul className="navigation-menu nav-right nav-light" id="navmenu-nav">
                    <li><NavLink to="/index-blog" className="sub-menu-item">Home</NavLink></li>
                    <li><Link to="#" className="sub-menu-item">Travel</Link></li>
                    <li><Link to="#" className="sub-menu-item">Lifestyle</Link></li>
                    <li><Link to="#" className="sub-menu-item">Technology</Link></li>

                    <li className="has-submenu parent-menu-item">
                        <Link to="#">Blog Post</Link><span className="menu-arrow"></span>
                        <ul className="submenu">
                            <li><Link to="/blog-standard-post" className="sub-menu-item">Standard Post</Link></li>
                            <li><Link to="/blog-slider-post" className="sub-menu-item">Slider Post</Link></li>
                            <li><Link to="/blog-gallery-post" className="sub-menu-item">Gallery Post</Link></li>
                            <li><Link to="/blog-youtube-post" className="sub-menu-item">Youtube Post</Link></li>
                            <li><Link to="/blog-vimeo-post" className="sub-menu-item">Vimeo Post</Link></li>
                            <li><Link to="/blog-html-video-post" className="sub-menu-item">HTML Video Post</Link></li>
                            <li><Link to="/blog-audio-post" className="sub-menu-item">Audio Post</Link></li>
                            <li><Link to="/blog-html-audio-post" className="sub-menu-item">HTML Audio Post</Link></li>
                            <li><Link to="/blog-blockquote-post" className="sub-menu-item">Blockquote</Link></li>
                            <li><Link to="/blog-left-sidebar-post" className="sub-menu-item">Left Sidebar</Link></li>
                        </ul>
                    </li>

                    <li><Link to="/page-contact-one" className="sub-menu-item">Contact</Link></li>
                </ul>
            </div>
        </div>
    </header>
    )
}