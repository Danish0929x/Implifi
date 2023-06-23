import React from "react";
import Navbar from "../components/Navbar";
import { MdOutlineVideoLabel } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";
import Course from "../components/Course";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="virtual-labs">
        <div className="vl-top">
          <div className="vl-top-left">
            <h2>Welcome to Implifi, Username.</h2>
            <p>
              The purpose of a product update is to add new features, fix bugs
              or improve the performance of the product.
            </p>
            <button>Get started</button>
          </div>
          <div className="vl-top-right">
            <img src="https://mantisdashboard.io/static/media/welcome-banner.1cadafdc666ea9256efd.png" />
          </div>
        </div>
      </div>

      <div className="implifi-all">
        <div className="ia-item">
          <div className="ia-item-top">
            <MdOutlineVideoLabel />
          </div>
          <div className="ia-item-bottom">
            <h2>Virtual labs</h2>
            <p>
              Practice structured lab programmes for REVA University students.
            </p>
            <Link to="/virtuallabs">Continue</Link>
          </div>
        </div>
        <div className="ia-item">
          <div className="ia-item-top">
            <TbFileCertificate />
          </div>
          <div className="ia-item-bottom">
            <h2>Certificate</h2>
            <p>
              Practice structured lab programmes for REVA University students.
            </p>
            <Link to="/certificate">View all</Link>
          </div>
        </div>
        <div className="ia-item">
          <div className="ia-item-top">
            <FaLaptopCode />
          </div>
          <div className="ia-item-bottom">
            <h2>Workshops</h2>
            <p>
              Practice structured lab programmes for REVA University students.
            </p>
            <Link to="/courses">Explore</Link>
          </div>
        </div>
      </div>

      <div className="continue">
        <div className="continue-virtual">
          <div className="cv-top">
            <p>Recents labs</p>
            <Link>View all</Link>
          </div>
          <div className="cv-main">
            <Link to="http://localhost:3000/arithmetic-calculator/introduction" className="cv-main-item">
              <div className="info">
                <h2>Building an Amazon clone</h2>
                <p>Web Tcehnologies</p>
              </div>
              <div className="sc-status">
                <span className="pending">Pending</span>
              </div>
            </Link>
            <Link to="http://localhost:3000/arithmetic-calculator/introduction" className="cv-main-item">
              <div className="info">
                <h2>Artimetic operator</h2>
                <p>Programming with python</p>
              </div>
              <div className="sc-status">
                <span className="completed">Completed</span>
              </div>
            </Link>
            <Link to="http://localhost:3000/arithmetic-calculator/introduction" className="cv-main-item">
              <div className="info">
                <h2>Artimetic operator</h2>
                <p>Programming with python</p>
              </div>
              <div className="sc-status">
                <span className="completed">Completed</span>
              </div>
            </Link>
            <Link to="http://localhost:3000/arithmetic-calculator/introduction" className="cv-main-item">
              <div className="info">
                <h2>Artimetic operator</h2>
                <p>Programming with python</p>
              </div>
              <div className="sc-status">
                <span className="not-started">Not started</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="continue-workshop">
          <div className="cw-top">Continue preparation</div>
          <div className="cw-main">
          <Course
            title="Basics of Python with Data Structures and Algorithms"
            img1="https://res.cloudinary.com/dev6cpp4u/image/upload/v1687444804/1_g7yits.png"
            img2="https://files.codingninjas.com/java-11713.svg"
            desc="This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in Data Science & Machine Learning"
            info1="40"
            info2="80"
            link="./"
          />

          
          <Course
            title="Basics of Python with Data Structures and Algorithms"
            img1="https://res.cloudinary.com/dev6cpp4u/image/upload/v1687444804/4_xf9tzx.png"
            img2="https://files.codingninjas.com/python-11712.svg"
            desc="This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in Data Science & Machine Learning"
            info1="40"
            info2="80"
            link="./"
          />

          <Course
            title="Basics of Python with Data Structures and Algorithms"
            img1="https://res.cloudinary.com/dev6cpp4u/image/upload/v1687444803/3_c6hmhu.png"
            img2="https://files.codingninjas.com/mern-11710.svg"
            desc="This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in Data Science & Machine Learning"
            info1="40"
            info2="80"
            link="./"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
