import React from "react";
import Navbar from "../components/Navbar";
import ProfileLogo from "../../assets/images/profile-ph.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faGitHub } from "@fortawesome/free-solid-svg-icons";
import Badge1 from "../../assets/images/1.png";
import Badge2 from "../../assets/images/2.png";
import Badge3 from "../../assets/images/3.png";
import Badge4 from "../../assets/images/4.png";
import Cert from "../../assets/images/cer.png";
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
                </li>{" "}
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
          </div>
          <h4>For completing Semester-wise Labs</h4>
          <div className="badge-display">
            <img src={Badge1} alt="" />
            <img src={Badge2} alt="" />
            <img src={Badge3} alt="" />
            <img src={Badge4} alt="" />
          </div>
        </div>
        <div className="certificate-box box">
          <div className="top">
            <h2>Certificates</h2>
          </div>
          <h4>Certificates you've earned</h4>
          <div className="badge-display">
            <div className="cert-info">
              <img src={Cert} alt="" />
              <p>Python (Basic)</p>
            </div>
            <div className="cert-info">
              <img src={Cert} alt="" />
              <p>SQL (Basic)</p>
            </div>
          </div>
        </div>
        <div className="certificate-box box">
          <div className="top">
            <h2>Social</h2>
          </div>
          <h4>Link to other socials</h4>
          <div className="badge-display">
            <div className="cert-info">
      
            </div>
            <div className="cert-info">
              <p>SQL (Basic)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
