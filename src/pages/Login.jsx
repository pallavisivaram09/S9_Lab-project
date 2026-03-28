import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/users");
      const users = await res.json();

      const validUser = users.find(
        user => user.email === email && user.password === password
      );

      if (validUser) {
        setIsAuth(true);
        navigate("/dashboard");
      } else {
        alert("Incorrect Email or Password");
      }

    } catch (error) {
      alert("Server error. Make sure JSON Server is running.");
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        width: "360px",
        padding: "40px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "25px", color: "#333" }}>
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ ...inputStyle, marginBottom: "20px" }}
        />

        <button
          onClick={handleLogin}
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.opacity = "0.85"}
          onMouseOut={(e) => e.target.style.opacity = "1"}
        >
          Login
        </button>

        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{ color: "#667eea", fontWeight: "bold", cursor: "pointer" }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "14px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(135deg, #667eea, #764ba2)",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s"
};

export default Login;