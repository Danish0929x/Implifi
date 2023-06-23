import React from "react";
import Navbar from "../components/Navbar";
import { MdOutlineVideoLabel } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import "./style.css";
import { Link } from "react-router-dom";


function VirtualLab() {
  return (
    <div>
      <Navbar />
      <div className="virtual-lab-do">
        <div className="head">
          <h2>
            <span>Access</span> simulation based labs remotely.
          </h2>
          <h3>
            Perform your lab excersises from anywhere, anytime without any
            dependencies.
          </h3>
        </div>
        <div className="virtual-lab-domain">
        <div className="vld-main">
          <div className="cv-top">
            <p>Recents labs</p>
            <Link>View all</Link>
          </div>
          <div className="cv-main">
            <Link to="http://localhost:3000/arithmetic-calculator/introduction" className="cv-main-item">
              <div className="info">
                <h2>Building an Amazon clone</h2>
                <p>New web Tcehnologies</p>
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
        </div>
      </div>
    </div>
  );
}

export default VirtualLab;
