import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <img
          className="logoImg"
          src={require("../images/mainLogo.png")}
          alt="scdc"
        />
        <h3 className="headingTop">Ramaera industries </h3>
        <div className="flexHeader">
          <img
            className="notification"
            src={require("../images/notification.png")}
            alt="scdc"
          />
          <img className="dot" src={require("../images/dot.png")} alt="scdc" />
          <p>English</p>
          <img
            className="dropdown"
            src={require("../images/dropdownWhite.png")}
            alt="scdc"
          />
        </div>
      </div>
      <div className="headerBottom"></div>
    </>
  );
};

export default Header;
