import React from "react";
import Navbar from "../components/Navbar";
import ProfileLogo from "../../assets/images/profile-ph.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Profile() {
  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-info">
        <div className="profile-box box">
          <div className="top">
            <h2>Profile</h2>
            <FontAwesomeIcon icon={faPen} />
          </div>
          <div className="profile-data">
            <img src={ProfileLogo} alt="Profile" />
            <div className="profile-text">
              <ul className="key">
                <li className="key-li">
                  <p className="keys">Full Name</p>
                  <p>Username</p>
                </li>
                <li className="key-li">
                  <p className="keys">ID</p>
                  <p>@user222316</p>
                </li>
                <li className="key-li">
                  <p className="keys">Location</p>
                  <p>Bangalore, India</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="education-box box">
          <div className="top">
            <h2>About</h2>
            <FontAwesomeIcon icon={faPen} />
          </div>
          <div className="profile-text">
            <ul className="key">
              <li className="key-li">
                <p className="keys">Current Role</p>
                <p>Student</p>
              </li>
              <hr />
              <li className="key-li">
                <p className="keys">Education</p>
                <p>REVA University</p>
              </li>{" "}
              <hr />
              <li className="key-li">
                <p className="keys">Graduation Year</p>
                <p>2025</p>
              </li>{" "}
              <hr />
            </ul>
          </div>
        </div>
        <div className="badge-box box">
          <div className="top">
            <h2>Badges</h2>
            <FontAwesomeIcon icon={faPen} />
          </div>
          <div className="profile-text">
            <ul className="key">
              <li className="key-li">
                <p className="keys">Current Role</p>
                <p>Student</p>
              </li>
              <hr />
              <li className="key-li">
                <p className="keys">ID</p>
                <p>@user222316</p>
              </li>{" "}
              <hr />
              <li className="key-li">
                <p className="keys">Location</p>
                <p>Bangalore, India</p>
              </li>{" "}
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
