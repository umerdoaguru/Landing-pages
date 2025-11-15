import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
import { MdKeyboardArrowRight } from "../../assets/icons/vander";
import { IoMdArrowDropdown } from "react-icons/io";
export default function SaasNavbar() {
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        id="topnav"
        className={`${scroll ? "nav-sticky" : ""} defaultscroll `}
      >
        <div className="container">
          <Link className="logo" to="/">
            <span className="logo-light-mode">
              <img
                src="/dental3.webp"
                alt="Description of the image"
                style={{ height: "80px" }}
              />
              {/* <h3 style={{color:"#E12454"}}>DentalGuru</h3> */}
            </span>
          </Link>

          <div className="menu-extras">
            <div className="menu-item">
              <Link
                to="#"
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

          <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
            <ul
              className="navigation-menu nav-right nav-light"
              id="navmenu-nav"
            >
              <li className="has-submenu">
                <Link to="/" className="sub-menu-item">
                  Home
                </Link>
              </li>

              <li className="has-submenu">
                <Link to="/blogs">
                  blog
                </Link>
              </li>
              
              <li className="has-submenu">
                <Link to="/page-contact-one">Demo</Link>
              </li>

            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
