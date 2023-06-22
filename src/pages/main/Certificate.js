import React from "react";
import Navbar from "../components/Navbar";
import "./style.css";
import Badge1 from "../../assets/images/1.png";
import Badge2 from "../../assets/images/2.png";
import Badge3 from "../../assets/images/3.png";
import Badge4 from "../../assets/images/4.png";
import Cert from "../../assets/images/cer.png";

function Courses() {
  return (
    <div>
      <Navbar />
      <div className="course-heading box">
        <h2><strong>Certification</strong> by Implifi.</h2>
        <p>Get certify from Implifi and display your skills to whole world!</p>
      </div>
      <div className="profile-info">
        <div className="badge-box box">
          <div className="top">
            <h2>Badges</h2>
          </div>
          <h4>For completing Semester-wise Labs</h4>
          <h4 style={{ fontWeight: "700", marginTop: "20px" }}>Owned Badges</h4>
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
              <p>Python</p>
            </div>
            <div className="cert-info">
              <img src={Cert} alt="" />
              <p>SQL</p>
            </div>
          </div>
          <h4>Certification Courses</h4>
          <div className="badge-display">
            <div className="cert-info">
              <img src={Cert} alt="" />
              <p>JavaScript</p>
            </div>
            <div className="cert-info">
              <img src={Cert} alt="" />
              <p>C</p>
            </div>
            <div className="cert-info">
              <img src={Cert} alt="" />
              <p>C++</p>
            </div>
            <div className="cert-info">
              <img src={Cert} alt="" />
              <p>ReactJS</p>
            </div>
            <div className="cert-info">
              <img src={Cert} alt="" />
              <p>Linux</p>
            </div>
            <div className="cert-info">
              <img src={Cert} alt="" />
              <p>Networking</p>
            </div>
            <div className="cert-info">
              <img src={Cert} alt="" />
              <p>DBMS</p>
            </div>
            <div className="cert-info">
              <img src={Cert} alt="" />
              <p>Problem Solving</p>
            </div>
            <div className="cert-info">
              <img src={Cert} alt="" />
              <p>Android Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
