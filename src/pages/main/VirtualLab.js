import React from "react";
import Navbar from "../components/Navbar";
import { MdOutlineVideoLabel } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import "./style.css";

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
            <div className="vld-top">
              <div className="vld-top-left">
                  <AiOutlineSearch />
                  <input type="text" />
              </div>
              <div className="vld-top-right">
                  <AiOutlineSearch />
                  <input type="text" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualLab;
