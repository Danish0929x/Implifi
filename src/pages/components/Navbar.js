import React from "react";
import logo from "../../assets/images/logo-white.png";
import { Link, useNavigate } from 'react-router-dom';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');

    // Additional logout logic if needed
  };
  
  return (
    <div className="Navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="nav-logo" />
      </Link>
      <di v className="nav-options">
        <ul className="nav-lists">
          <li>
            <Link to="/virtuallabs">Virtual Labs</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/certificate">Certificate</Link>
          </li>
        </ul>
      </di>
      <div className="profile-display">
        <FontAwesomeIcon icon={faGear} className="gear-icon" title="Settings"/> 
        <FontAwesomeIcon icon={faArrowRightFromBracket} title="Logout" onClick={handleLogout} /><hr />
        <div className="profile-name">
          <p>Username</p>
          <Link to="  /profile"><FontAwesomeIcon icon={faUser} className="profile-icon" /></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
