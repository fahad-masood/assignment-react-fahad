import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Kyc from "./components/Kyc";
import Membership from "./components/Membership";
import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";

function App() {
  const [toggle, setToggle] = useState(true);
  const data = [
    {
      name: "Your passport photo (White background)",
      kycCode: "PSPT",
    },
    {
      name: "Address Proof Aadhar Front Scan Copy",
      kycCode: "ADHRF",
    },
    {
      name: "Aadhar Back Scan Copy",
      kycCode: "ADHRB",
    },
    {
      name: "Additional Address Proof Voter ID Front Copy",
      kycCode: "VOTRF",
    },
    {
      name: "PAN Card",
      kycCode: "PANC",
    },
    {
      name: "Vote ID Back Copy",
      kycCode: "VOTRB",
    },
    {
      name: "Bank Statement or Passbook with address",
      kycCode: "BANK",
    },
    {
      name: "Mother Company Payment Proof",
      kycCode: "MCPF",
    },
    {
      name: "Payment Proof 2",
      kycCode: "PPF2",
    },
    {
      name: "Payment Proof 3",
      kycCode: "PPF3",
    },
  ];

  const biggerThan1290 = useMediaPredicate("(min-width: 1290px)");

  return (
    <div className="App">
      <Header />
      <div className="flex">
        <Sidebar />
        {biggerThan1290 && (
          <hr
            style={{
              height: "245px",
              width: "1px",
              position: "relative",
              marginLeft: "20px",
              marginTop: "120px",
            }}
          />
        )}
        {toggle ? (
          <Kyc data={data} toggle={toggle} setToggle={setToggle} />
        ) : (
          <Membership />
        )}
      </div>
    </div>
  );
}

export default App;
