import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const accounts = [
    { username: "user1", password: "pass1"},
    { username: "user2", password: "pass2"},
  ];

  const admin_accounts = [
    { username: "admin", password: "admin123"},
  ];

  const handleLogin = () => {
    const user = accounts.find(
      (account) => account.username === username && account.password === password
    );
    const admin = admin_accounts.find(
      (account) => account.username === username && account.password === password
    );
    if (user) {
      onLogin(user); 
    } 
    else if (admin) {
      onLogin(admin);
    } 
    else {
      setError("Invalid username or password. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
