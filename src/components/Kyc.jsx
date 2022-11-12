import React from "react";
import "../styles/Kyc.css";

const Kyc = ({ toggle, setToggle }) => {
  const handleToggle = () => {
    console.log(toggle);
    setToggle(false);
    console.log(toggle);
  };
  return (
    <div className="mainContainer">
      <div className="flexRow">
        <div className="kyc">
          <h3 className="heading">
            KYC
            <img
              className="icon-small"
              src={require("../images/kyc.png")}
              alt="scdc"
            />
          </h3>
          <p className="paragraph">
            Your information is collected for legal and security purposes only
          </p>
        </div>
        <div className="membership">
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
      <p className="warning">
        <span className="span"> Note:</span> &nbsp; Upload only .jpg/jpeg or
        .png extension image file !!
      </p>
      <div className="kycDetails">
        <div className="flexColumn">
          <div className="imgContainer">
            <img
              className="imgPlaceholder"
              src={require("../images/imageOutline.png")}
              alt="scdc"
            />
            <p className="imgDesc">Your passport photo (White background)</p>
          </div>
          <button className="chooseBtn">Choose File</button>
        </div>

        <div className="flexColumn">
          <div className="imgContainer">
            <img
              className="imgPlaceholder"
              src={require("../images/imageOutline.png")}
              alt="scdc"
            />
            <p className="imgDesc">Address Proof Aadhar Front Scan Copy</p>
          </div>
          <button className="chooseBtn">Choose File</button>
        </div>

        <div className="flexColumn">
          <div className="imgContainer">
            <img
              className="imgPlaceholder"
              src={require("../images/imageOutline.png")}
              alt="scdc"
            />
            <p className="imgDesc">Aadhar Back Scan Copy</p>
          </div>
          <button className="chooseBtn">Choose File</button>
        </div>

        <div className="flexColumn">
          <div className="imgContainer">
            <img
              className="imgPlaceholder"
              src={require("../images/imageOutline.png")}
              alt="scdc"
            />
            <p className="imgDesc">
              Additional Address Proof Voter ID Front Copy
            </p>
          </div>
          <button className="chooseBtn">Choose File</button>
        </div>

        <div className="flexColumn">
          <div className="imgContainer">
            <img
              className="imgPlaceholder"
              src={require("../images/imageOutline.png")}
              alt="scdc"
            />
            <p className="imgDesc">PAN Card</p>
          </div>
          <button className="chooseBtn">Choose File</button>
        </div>

        <div className="flexColumn">
          <div className="imgContainer">
            <img
              className="imgPlaceholder"
              src={require("../images/imageOutline.png")}
              alt="scdc"
            />
            <p className="imgDesc">Voter ID Back Copy</p>
          </div>
          <button className="chooseBtn">Choose File</button>
        </div>

        <div className="flexColumn">
          <div className="imgContainer">
            <img
              className="imgPlaceholder"
              src={require("../images/imageOutline.png")}
              alt="scdc"
            />
            <p className="imgDesc">Bank Statement or Passbook with address</p>
          </div>
          <button className="chooseBtn">Choose File</button>
        </div>

        <div className="flexColumn">
          <div className="imgContainer">
            <img
              className="imgPlaceholder"
              src={require("../images/imageOutline.png")}
              alt="scdc"
            />
            <p className="imgDesc">Mother Company Payment Proof</p>
          </div>
          <button className="chooseBtn">Choose File</button>
        </div>

        <div className="flexColumn">
          <div className="imgContainer">
            <img
              className="imgPlaceholder"
              src={require("../images/imageOutline.png")}
              alt="scdc"
            />
            <p className="imgDesc">Payment Proof 2</p>
          </div>
          <button className="chooseBtn">Choose File</button>
        </div>

        <div className="flexColumn">
          <div className="imgContainer">
            <img
              className="imgPlaceholder"
              src={require("../images/imageOutline.png")}
              alt="scdc"
            />
            <p className="imgDesc">Payment Proof 3</p>
          </div>
          <button className="chooseBtn">Choose File</button>
        </div>
      </div>
      <button onClick={handleToggle} className="submitBtn">
        Submit
      </button>
    </div>
  );
};

export default Kyc;
