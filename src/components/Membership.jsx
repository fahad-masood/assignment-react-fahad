import React from "react";
import "../styles/Membership.css";

const Membership = () => {
  return (
    <div className="mainContainer">
      <div className="flexRow">
        <div className="kycOff">
          <h3 className="heading">
            KYC
            <img
              className="icon-small"
              src={require("../images/kyc.png")}
              alt="scdc"
            />
            <img
              style={{ marginLeft: "8px" }}
              src={require("../images/tick.png")}
              alt="scdc"
            />
          </h3>
          <p className="paragraph">
            Your information is collected for legal and security purposes only
          </p>
        </div>
        <div className="membershipOn">
          <h3 className="heading">
            Membership
            <img
              className="icon-small"
              src={require("../images/membership.png")}
              alt="scdc"
            />
          </h3>
          <p className="paragraph">Please chose your membership</p>
        </div>
      </div>
      <p className="basicText">You have applied for Basic membership</p>
      <div className="flexBtnRow">
        <button className="darkBtn">
          Basic <img src={require("../images/star.png")} alt="scdc" />
        </button>
        <button className="darkBtnOff">
          Advanced{" "}
          <img src={require("../images/starDisabled.png")} alt="scdc" />
        </button>
      </div>

      <div className="infoBasic">
        <span className="spanText">
          You need to pay <br /> ₹ 250 to subscribe this membership
        </span>
      </div>
      <button className="submitBtn">Pay Now</button>
    </div>
  );
};

export default Membership;
