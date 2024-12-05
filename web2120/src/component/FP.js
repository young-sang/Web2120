import React, { useState } from "react";
import Login from "./Login";
import Web from "./Web.js";

function FP() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");

  const handleLogin = (user) => {
    setIsLoggedIn(true); 
    setUserType(user.username === "admin" ? "admin" : "user");
  };

  return (
    <div className="FP">
      {isLoggedIn ? <Web userType={userType} /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default FP;
