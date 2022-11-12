import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="flex active">
          <img
            className="iconSidebar"
            src={require("../images/profile.png")}
            alt="scdc"
          />{" "}
          Profile
        </li>
        <li className="flex">
          <img
            className="iconSidebar"
            src={require("../images/projects.png")}
            alt="scdc"
          />
          Project
          <img
            className="dropdown"
            src={require("../images/dropdown.png")}
            alt="scdc"
          />
        </li>
        <li className="flex">
          <img
            className="iconSidebar"
            src={require("../images/finance.png")}
            alt="scdc"
          />
          Finance
          <img
            className="dropdown"
            src={require("../images/dropdown.png")}
            alt="scdc"
          />
        </li>
        <li className="flex">
          <img
            className="iconSidebar"
            src={require("../images/support.png")}
            alt="scdc"
          />
          Support
          <img
            className="dropdown"
            src={require("../images/dropdown.png")}
            alt="scdc"
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
