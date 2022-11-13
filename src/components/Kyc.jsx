import React, { useEffect, useState } from "react";
import "../styles/Kyc.css";

const Kyc = ({ toggle, setToggle, data }) => {
  const [docList, setDocList] = useState({});

  const handleToggle = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      docList.ADHRF.selected ||
      docList.ADHRB.selected ||
      docList.PSPT.selected ||
      docList.VOTRF.selected ||
      docList.VOTRB.selected ||
      docList.PANC.selected ||
      docList.BANK.selected ||
      docList.MCPF.selected ||
      docList.PPF2.selected ||
      docList.PPF3.selected
        ? setToggle(false)
        : alert("Please upload atleast one document");
    }
  };

  useEffect(() => {
    let docList = {};
    data.forEach((item) => {
      docList[item.kycCode] = {
        file: [],
        ext: "",
        selected: false,
      };
    });
    setDocList(docList);
  }, [data]);

  const handleClick = (e) => {
    let itemArr = Array.from(e.target.children);
    if (Array.isArray(itemArr) && itemArr.length) {
      itemArr[0].click();
    }
  };

  const onFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length) {
      setDocList({
        ...docList,
        [name]: {
          file: files[0],
          selected: true,
        },
      });
    }
  };

  const getStyle = (key, list) => {
    if (list[key]) {
      let bg = list[key].selected ? true : false;
      return bg;
    }
    return false;
  };

  // Check for the documents list after every upload:
  console.log("Documents List: ", docList);

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
        {data.map((item) => {
          return (
            <div className="flexColumn">
              <div
                className="imgContainer"
                style={{
                  background: getStyle(item.kycCode, docList)
                    ? "linear-gradient(90deg, #F9D423 0%, #E65C00 100%)"
                    : "",
                }}
              >
                <img
                  className="imgPlaceholder"
                  src={require("../images/imageOutline.png")}
                  alt="scdc"
                />
                <p key={item.kycCode} className="imgDesc">
                  {item.name}
                </p>
              </div>
              <button
                style={{
                  background: getStyle(item.kycCode, docList)
                    ? "linear-gradient(90deg, #F9D423 0%, #E65C00 100%)"
                    : "",
                }}
                key={item.kycCode}
                onClick={handleClick}
                className="chooseBtn"
              >
                <input
                  name={item.kycCode}
                  onChange={onFileChange}
                  key={item.kycCode}
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  style={{ display: "none" }}
                />
                Choose File
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={handleToggle} className="submitBtn">
        Submit
      </button>
    </div>
  );
};

export default Kyc;
