import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      backgroundColor: "#2c3e50",
      padding: "15px",
      color: "white",
      textAlign: "center"
    }}>
      <h2>Issue Tracking Dashboard</h2>
      <Link to="/dashboard" style={{ color: "white", marginRight: "15px" }}>
        Dashboard
      </Link>
      <Link to="/reports" style={{ color: "white" }}>
        Reports
      </Link>
    </div>
  );
}

export default Navbar;