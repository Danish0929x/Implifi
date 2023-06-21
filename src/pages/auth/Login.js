import React from 'react';
import logo from "../../../src/assets/images/logo-white.png";
import { Link } from 'react-router-dom';
import "./style.css";

function Login() {
    const [role, setRole] = React.useState(true);

    const adminHandle = () => {
        setRole(!role)
    }

  return (
    <div className='login'>
      <img src={logo} className='login-logo' />
      <div className='login-main'>
        <div className='login-main-top'>
          <h2>{role ? "Student" : "Admin"} login</h2>
          <Link to="/register">Don't have an account?</Link>
        </div>
        <div className='form-group'>
            <p>Email Address</p>
            <input type='text' />
        </div>
        <div className='form-group'>
            <p>Password</p>
            <input type='password' />
        </div>
        <Link className='forget-pass' onClick={adminHandle}>{!role ? "Student" : "Admin"} Login?</Link>
        <button className='login-btn'>
            Login
        </button>
      </div>
    </div>
  );    
}

export default Login;
