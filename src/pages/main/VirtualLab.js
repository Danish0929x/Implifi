import React from "react";
import Navbar from "../components/Navbar";
import { MdOutlineVideoLabel } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { TbFileCertificate } from 'react-icons/tb';
import "./style.css"

function VirtualLab() {
  return (
    <div>
      <Navbar />
      <div className="virtual-labs">
        <div className="vl-top">
          <div className="vl-top-left">
            <h2>Welcome to Implifi</h2>
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
              <p>Practice structured lab programmes for REVA University students.</p>
          </div>
        </div>
        <div className="ia-item">
          <div className="ia-item-top">
              <TbFileCertificate />
          </div>
          <div className="ia-item-bottom">
              <h2>Certificate</h2>
              <p>Practice structured lab programmes for REVA University students.</p>
          </div>
        </div>
        <div className="ia-item">
          <div className="ia-item-top">
              <FaLaptopCode />
          </div>
          <div className="ia-item-bottom">
              <h2>Workshops</h2>
              <p>Practice structured lab programmes for REVA University students.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualLab;
