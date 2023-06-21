import React from "react";
import logo from "../../assets/images/logo-white.png";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="nav-logo" />
      </Link>
      <di v className="nav-options">
        <ul className="nav-lists">
          <li>
            <Link to="/">Virtual Labs</Link>
          </li>
          <li>
            <Link to="/">Courses</Link>
          </li>
          <li>
            <Link to="/">Events</Link>
          </li>
          <li>
            <Link to="/">Certification</Link>
          </li>
        </ul>
      </di>
      <div className="profile-display">
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faGear} className="gear-icon"/> <hr />
        <div className="profile-name">
          <p>Welcome, User</p>
        <FontAwesomeIcon icon={faUser} className="profile-icon"/>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
