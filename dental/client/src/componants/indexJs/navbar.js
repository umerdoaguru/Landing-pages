import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";
import businessPng from "../../assets/images/demos/business.png";
import digitalagency from "../../assets/images/demos/digital-agency.png";
import startup from "../../assets/images/demos/startup.png";
import saas from "../../assets/images/demos/saas.png";
import marketing from "../../assets/images/demos/marketing.png";
import crypto from "../../assets/images/demos/crypto.png";
import cowork from "../../assets/images/demos/cowork.png";
import gym from "../../assets/images/demos/gym.png";
import restaurant from "../../assets/images/demos/restaurant.png";
import job from "../../assets/images/demos/job.png";
import blog from "../../assets/images/demos/blog.png";
import personal from "../../assets/images/demos/personal.png";
import portfolio from "../../assets/images/demos/portfolio.png";
import portfolioAgency from "../../assets/images/demos/portfolio-agency.png";
import studio from "../../assets/images/demos/studio.png";
import photography from "../../assets/images/demos/photography.png";

import { AiOutlineArrowUp, FiShoppingCart } from "../../assets/icons/vander";

export default function Navbar({
  navClass,
  manuClass,
  logoLight,
  smallButton,
}) {
  const [scroll, setScroll] = useState(false);
  const [isMenu, setisMenu] = useState(false);
  useEffect(() => {
    activateMenu();
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  var mybutton = document.getElementById("back-to-top");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (mybutton != null) {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Toggle menu
  const toggleMenu = () => {
    setisMenu(!isMenu);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  //Menu Active
  function getClosest(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  }

  function activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  }

  // Clickable Menu
  if (document.getElementById("navigation")) {
    var elements = document
      .getElementById("navigation")
      .getElementsByTagName("a");
    for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].onclick = function (elem) {
        if (elem.target.getAttribute("href") === "#") {
          var submenu = elem.target.nextElementSibling.nextElementSibling;
          submenu.classList.toggle("open");
        }
      };
    }
  }

  return (
    <>
      <header
        id="topnav"
        className={`${scroll ? "nav-sticky" : ""} ${navClass}`}
      >
        <div className="container">
          {/* <h3>DentalGuru</h3> */}
          {/* {logoLight === true ? (
            <Link className="logo" to="/">
              <span className="logo-light-mode">
                <img src={logodark} className="l-dark" alt="" />
                <img src={logolight} className="l-light" alt="" />
              </span>
              <img src={logolight} className="logo-dark-mode" alt="" />
            </Link>
          ) : (
            <Link className="logo" to="/">
              <img src={logodark} className="logo-light-mode" alt="" />
              <img src={logolight} className="logo-dark-mode" alt="" />
            </Link>
          )} */}

          <div className="menu-extras">
            <div className="menu-item">
              <Link
                className={`navbar-toggle ${isMenu ? "open" : ""}`}
                id="isToggle"
                onClick={() => toggleMenu()}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
          {/* {smallButton === false ? 
                    <ul className="buy-button list-inline mb-0">
                        <li className="list-inline-item ps-1 mb-0">
                            <Link to="https://1.envato.market/fronter-react" target="_blank">
                                <div className="btn btn-icon btn-pills btn-primary d-sm-none d-inline-flex"><FiShoppingCart/></div>
                                <div className="btn btn-primary d-none d-sm-block">Download Now</div>
                            </Link>
                        </li>
                    </ul>:

                // <ul className="buy-button list-inline mb-0">
                //     <li className="list-inline-item ps-1 mb-0">
                //         <Link to="https://1.envato.market/fronter-react" target="_blank">
                //             <div className="btn btn-icon btn-pills btn-primary d-sm-none d-inline-flex"><FiShoppingCart/></div>
                //             <div className="btn btn-pills btn-primary d-none d-sm-block"><FiShoppingCart/> Buy Now</div>
                //         </Link>
                //     </li>
                // </ul>
                } */}

          <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
            <ul className={manuClass}>
              <li>
                <Link to="/" className="sub-menu-item fs-5">
                  Home
                </Link>
              </li>
              {/* <li className="has-submenu parent-parent-menu-item">
                            <Link to="#">Landing</Link><span className="menu-arrow"></span>
                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li>
                                            <Link to="/index-business" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={businessPng} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Business</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-digital-agency" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={digitalagency} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Digital Agency</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-startup" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={startup} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Startups</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li>
                                            <Link to="/index-saas" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={saas} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Saas</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-marketing" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={marketing} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Marketing</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-cryptocurrency" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={crypto} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Cryptocurrency</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-co-working" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={cowork} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Co-Working </span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li>
                                            <Link to="/index-gym" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={gym} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Gym</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-restaurant" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={restaurant} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Restaurant</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-job" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={job} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"> Job <span className="badge bg-warning rounded-lg">Both</span></span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-blog" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={blog} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"> Minimal Blog <span className="badge bg-success rounded-lg">Multi</span></span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li>
                                            <Link to="/index-personal" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={personal} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Personal</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-portfolio" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={portfolio} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Portfolio</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-portfolio-agency" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={portfolioAgency} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Portfolio Agency</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                
                                <li>
                                    <ul>
                                        <li>
                                            <Link to="/index-studio" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={studio} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Studio</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-multi-business" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={businessPng} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Business <span className="badge bg-success rounded-lg">Multi</span></span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-photography" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={photography} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block">Photography <span className="badge bg-success rounded-lg">Multi</span></span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>   
                            </ul>
                        </li> */}

              {/* <li className="has-submenu parent-parent-menu-item">
                <Link to="#">Pages</Link>
                <span className="menu-arrow"></span>
                <ul className="submenu"> */}
              {/* <li><Link to="/page-aboutus" className="sub-menu-item"> About Us</Link></li>
                                <li><Link to="/page-services" className="sub-menu-item">Services</Link></li>
                                <li><Link to="/page-service-detail" className="sub-menu-item">Service Detail</Link></li>
                                <li><Link to="/page-team" className="sub-menu-item"> Team</Link></li>
                                <li><Link to="/page-team-detail" className="sub-menu-item"> Team Detail</Link></li>
                                <li><Link to="/page-pricing" className="sub-menu-item">Pricing</Link></li>
                                <li><Link to="/page-faqs" className="sub-menu-item">FAQs</Link></li> */}

              {/* <li className="has-submenu parent-menu-item"><Link to="#"> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/blog-grid" className="sub-menu-item">Blog Grid</Link></li>
                                        <li><Link to="/blog-grid-sidebar" className="sub-menu-item">Blog with Sidebar</Link></li>

                                        <li className="has-submenu child-menu-item"><Link to="#"> Blog Posts </Link><span className="submenu-arrow"></span>
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
                                    </ul>  
                                </li> */}

              {/* <li className="has-submenu parent-menu-item"><Link to="#"> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/auth-login" className="sub-menu-item">Login</Link></li>
                                        <li><Link to="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                        <li><Link to="/auth-reset-password" className="sub-menu-item">Reset Password</Link></li>
                                    </ul>  
                                </li> */}

              {/* <li className="has-submenu parent-menu-item"><Link to="#"> Special</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                        <li><Link to="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                        <li><Link to="/page-error" className="sub-menu-item">Error</Link></li>
                                    </ul>
                                </li> */}
              {/* <li className="has-submenu parent-menu-item"><Link to="#"> Contact </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/page-contact-one" className="sub-menu-item">Contact One</Link></li>
                                        <li><Link to="/page-contact-two" className="sub-menu-item">Contact Two</Link></li>
                                    </ul>  
                                </li> */}
              {/* <li className="has-submenu parent-menu-item"><Link> Multi Level Menu</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link  className="sub-menu-item">Level 1.0</Link></li>
                                        <li className="has-submenu parent-menu-item"><Link > Level 2.0 </Link><span className="submenu-arrow"></span>
                                            <ul className="submenu">
                                                <li><Link  className="sub-menu-item">Level 2.1</Link></li>
                                                <li><Link  className="sub-menu-item">Level 2.2</Link></li>
                                            </ul>  
                                        </li>
                                    </ul>  
                                </li> */}
              {/* </ul>
              </li> */}

              {/* <li className="has-submenu parent-parent-menu-item">
                            <Link to="#">Portfolio</Link><span className="menu-arrow"></span>
                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Classic Portfolio</li>
                                        <li><Link to="/portfolio-classic-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-classic-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-classic-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-classic-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-classic-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Modern Portfolio</li>
                                        <li><Link to="/portfolio-modern-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-modern-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-modern-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-modern-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-modern-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Grid Portfolio</li>
                                        <li><Link to="/portfolio-grid-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-grid-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-grid-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-grid-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-grid-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Masonry Portfolio</li>
                                        <li><Link to="/portfolio-classic-masonry" className="sub-menu-item">Classic Masonry</Link></li>
                                        <li><Link to="/portfolio-modern-masonry" className="sub-menu-item">Modern Masonry</Link></li>
                                        <li><Link to="/portfolio-grid-masonry" className="sub-menu-item">Grid Masonry</Link></li>
                                        <li><Link to="/portfolio-project-masonry" className="sub-menu-item">Project masonry</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Portfolio Detail</li>
                                        <li><Link to="/portfolio-detail-one" className="sub-menu-item">Portfolio One</Link></li>
                                        <li><Link to="/portfolio-detail-two" className="sub-menu-item">Portfolio Two</Link></li>
                                        <li><Link to="/portfolio-detail-three" className="sub-menu-item">Portfolio Three</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li> */}

              {/* <li><Link to="/page-contact-one" className="sub-menu-item">Contact</Link></li> */}
            </ul>
          </div>
        </div>
      </header>
      <Link
        to="#"
        onClick={topFunction}
        id="back-to-top"
        className="back-to-top rounded-pill fs-5"
      >
        <AiOutlineArrowUp className="fea icon-sm icons align-middle" />
      </Link>
    </>
  );
}
