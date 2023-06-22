import React from "react";
import "./style.css";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <ul>
          <li>
            <a href="/">Profile</a>
          </li>
          <li className="problem">
            <a href="/">Education</a>
          </li>
          <li className="algorithm">
            <a href="/">Badges</a>
          </li>
          <li className="introduction">
            <a href="/">Certificates</a>
          </li>
          <li className="introduction">
            <a href="/">Events</a>
          </li>
          <li className="code">
            <a href="/" target="">
              Submissions
            </a>
          </li>
          <li className="introduction">
            <a href="/">Solution</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
