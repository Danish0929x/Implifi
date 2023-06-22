import React, { useState } from 'react';
import logo from "../../../src/assets/images/logo-white.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./style.css";

function Login() {
  const [role, setRole] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const adminHandle = () => {
    setRole(!role);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    
  };

  const handleSubmit = (e) => {
    console.log(formData.email,formData.password)
    e.preventDefault();
    // Make API call here and handle response
    axios
      .post('http://localhost:8000/auth/login', formData)
      .then((response) => {
        // Assuming the API response includes a 'token' field
        console.log(response)
        const { token } = response.data;
        localStorage.setItem('token', token);
        navigate('/');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <div className='login'>
      <img src={logo} className='login-logo' />
      <div className='login-main'>
        <div className='login-main-top'>
          <h2>{role ? "Student" : "Admin"} login</h2>
          <Link to="/register">Don't have an account?</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <p>Email Address</p>
            <input
              type='text'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-group'>
            <p>Password</p>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <Link className='forget-pass' onClick={adminHandle}>
            {!role ? "Student" : "Admin"} Login?
          </Link>
          <button type="submit" className='login-btn'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
