import React, { useState } from 'react';

const dummyUser = {
  email: "test@example.com",
  password: "password123",
};

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setUserError("");
    setPasswordError("");
    setLoading(true);

    // Simulate async API call (3000ms)
    setTimeout(() => {
      if (email !== dummyUser.email) {
        setUserError("User not found");
      } else if (password !== dummyUser.password) {
        setPasswordError("Password Incorrect");
      } else {
        // Successful login
        setUserError("");
        setPasswordError("");
        alert("Login Successful!");
      }
      setLoading(false);
    }, 3000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setUserError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="input-email"
          value={email}
          onChange={handleEmailChange}
        />
        

        <input
          type="password"
          id="input-password"
          value={password}
          onChange={handlePasswordChange}
        />
        

        <button type="submit" id="submit-form-btn" disabled={loading}>
          {loading ? "Logging in..." : "Submit"}
        </button>
      </form>
      {userError && <p id="user-error">{userError}</p>}
      {passwordError && <p id="password-error">{passwordError}</p>}
    </>
  );
}

export default App;
