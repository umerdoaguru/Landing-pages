import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBook, FaAddressCard } from "react-icons/fa";
import { ImSwitch } from "react-icons/im";
import { clearUser } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { FaBlog } from "react-icons/fa6";
const Sider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to Logout?");
    if (!isConfirmed) {
      return;
    }
    navigate("/");
    dispatch(clearUser());
  };

  return (
    <Wrapper>
      <div className="d-flex flex-column align-items-center p-3 sidebar">
        <div className="mt-5">
        <ul className="nav flex-column text-center mt-5">
          <li className="nav-item mt-5">
            <Link to="/Admin-Page-Career" className="nav-link">
              <FaBook className="fs-4 icon" />
              <span className="d-none d-md-block">Demo</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Admin-Page-Contact" className="nav-link">
              <FaAddressCard className="fs-4 icon" />
              <span className="d-none d-md-block">Lead Data</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AdminAdd-blogs" className="nav-link">
              <FaBlog className="fs-4 icon" />
              <span className="d-none d-md-block">Blogs</span>
            </Link>
          </li>
          <li className="nav-item" onClick={handleLogout}>
            <div className="nav-link logout">
              <ImSwitch className="fs-4 icon" />
              <button className="btn d-none d-md-block text-light mt-2 px-3 py-1">
                Logout
              </button>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sider;

const Wrapper = styled.div`
  .sidebar {
    width: 100px;
    height: 100vh;
    background-color: teal;
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
  }
  
  .nav-link {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    transition: background 0.3s;
  }
  
  .nav-link:hover {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  
  .icon {
    color: white;
  }
  
  .logout {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .sidebar {
      width: 60px;
    }
    .nav-link span {
      display: none;
    }
  }
  
  @media (max-width: 576px) {
    .sidebar {
      width: 50px;
    }
  }
`;
