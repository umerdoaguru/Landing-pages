import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import dashimg from "./adminDash.jpg";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";
// import {
//   signInStart,
//   signInSuccess,
//   signInFailure,
// } from "../../redux/user/userSlice";
// import { useDispatch, useSelector } from "react-redux";

const AdminLogin = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  //   const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   dispatch(signInStart());
      const res = await axios.post(
        `https://doaguru.com/api/auth/admin/login`,
        loginData
      );
      console.log(res.data);
      dispatch(setUser(res.data));
      //   dispatch(signInSuccess(res.data));
      navigate("/Admin-Page-Career");
      setLoginData({
        username: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
      //   dispatch(signInFailure(err.message));
    }
  };

  return (
    <>
      <Styled>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="p-4"></div>
                <div className="mt-3">
                  <h3>Have an account?</h3>
                </div>
                <form
                  onSubmit={handleSubmit}
                  style={{ width: "15rem", marginTop: "4rem" }}
                >
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form5Example1"
                      className="form-control"
                      name="username"
                      value={loginData.username}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form5Example1">
                      UserName
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form5Example2"
                      className="form-control"
                      name="password"
                      value={loginData.password}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form5Example2">
                      Password
                    </label>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Login
                    </button>
                  </div>
                  <p className="text-danger fw-bold">
                    {/* {error ? "Something went wrong!" : ""} */}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default AdminLogin;

const Styled = styled.div`
  background-image: url(${dashimg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  .form-control {
    background: transparent;
    border: none;
    height: 50px;
    color: white !important;
    border: 1px solid black;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 40px;
    padding-left: 20px;
    padding-right: 20px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    :hover {
      border: 1px solid black;
    }
  }
  .btn {
    cursor: pointer;
    border-radius: 40px;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    font-size: 15px;
    text-transform: uppercase;
    padding: 6px 16px;
  }
`;
