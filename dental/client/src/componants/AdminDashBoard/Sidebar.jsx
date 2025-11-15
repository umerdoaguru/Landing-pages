import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiUserSearchFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { ImSwitch } from "react-icons/im";
import { VscOrganization } from "react-icons/vsc";
import { clearUser } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getSidebarClass = (path) => {
    return location.pathname === path ? "active-nav" : "";
  };

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to Logout?");
    if (!isConfirmed) {
      return;
    }
    navigate("/Admin-Login");
    dispatch(clearUser());
  };

  return (
    <Wrapper>
      <div className="px-sm-2 px-0" id="sidebar">
        <div className="d-flex flex-column align-items-center px-3 pt-2">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center "
            id="menu"
          >
            <li>
              <Link
                to="/Admin-Page-Career"
                className={`link-div ${getSidebarClass("/Admin-Page-Career")}`}
              >
                <div>
                  {/* <i className="fs-4 bi bi-house-door-fill"></i> */}
                  <RiUserSearchFill className="icon" />
                </div>
                <div>
                  <h3 className=" d-none d-sm-inline fs-6" id="navleft1">
                    Book Now
                  </h3>
                </div>
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/Admin-Page-Contact"
                className={`link-div ${getSidebarClass("/Admin-Page-Contact")}`}
              >
                <div>
                  {/* <i className="fs-4 bi bi-house-door-fill"></i> */}
                  <IoIosContact className="icon" />
                </div>
                <div>
                  <h3 className=" d-none d-sm-inline fs-6" id="navleft1">
                    Contact
                  </h3>
                </div>
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/Admin-Page-UserSign"
                className={`link-div ${getSidebarClass(
                  "/Admin-Page-UserSign"
                )}`}
              >
                <div>
                  {/* <i className="fs-4 bi bi-house-door-fill"></i> */}
                  <VscOrganization className="icon" />
                </div>
                <div>
                  <h3 className=" d-none d-sm-inline fs-6" id="navleft1">
                    Appointment
                  </h3>
                </div>
              </Link>
            </li>
            <hr />
            <li>
              <div className="link-div" onClick={handleLogout}>
                <div>
                  {/* <i className="fs-4 bi bi-power"></i> */}
                  <ImSwitch className="icon" />
                </div>
                <div className="text-light">
                  Logout
                  {/* <button className="btn btn-danger d-none d-sm-inline">
                    Logout
                  </button> */}
                </div>
              </div>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
const Wrapper = styled.div`
  #navleft1 {
    font-size: 12px;
    margin-left: 0rem;
    color: white;
  }
  #navleft2 {
    font-size: 12px;
    margin-left: 0rem;
    color: white;
  }
  #navleft {
    font-size: 12px;
    margin-left: -0.2rem;
    color: white;
  }
  #sidebar {
    width: 100%;
    height: 82rem;
    background-color: #002c63;
    @media screen and (max-width: 768px) {
      width: 3rem;
      height: 212rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 7rem;
      height: 110rem;
    }
  }
  .bi {
    color: white;
  }

  li:hover {
    color: #8ae6ff;
  }

  .link-div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  a {
    text-decoration: none;
  }

  .active-nav {
    background: linear-gradient(to right, rgb(0, 229, 229), rgb(134, 255, 104));
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .icon {
    color: white;
    font-size: 1.9rem;
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.5rem;
    }
  }
`;
