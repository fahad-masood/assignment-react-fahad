import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Kyc from "./components/Kyc";
import Membership from "./components/Membership";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <Sidebar />
        {toggle ? (
          <Kyc toggle={toggle} setToggle={setToggle} />
        ) : (
          <Membership />
        )}
      </div>
    </div>
  );
}

export default App;
