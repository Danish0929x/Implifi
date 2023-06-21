import React from "react";
import logo from "../../../src/assets/images/logo-white.png";
import { Link } from "react-router-dom";
import "./style.css";

function Register() {
  return (
    <div className="login">
      <img src={logo} className="login-logo" />
      <div className="login-main">
        <div className="login-main-top">
          <h2>Register now</h2>
          <Link to="/login">Already Register?</Link>
        </div>
        <div className="form-group">
          <p>Full Name</p>
          <input type="text" />
        </div>
        <div className="form-group">
          <p>Email address</p>
          <input type="password" />
        </div>
        <div className="form-group">
          <p>Password</p>
          <input type="password" />
        </div>
        <div className="form-group">
          <p>Mobile</p>
          <input type="password" />
        </div>
        <button className="login-btn" style={{ marginTop: "25px" }}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;
