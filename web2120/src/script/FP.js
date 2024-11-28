import React, { useState } from "react";
import Login from "./Login";
import "../style/FP.css";
import Web from "./Web.js";

function FP() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  return (
    <div className="FP">
      {isLoggedIn ? <Web /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default FP;
