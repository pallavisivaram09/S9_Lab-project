import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Reports from "./pages/Reports";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [issues, setIssues] = useState([]);

  // ✅ Add Issue
  const addIssue = (issue) => {
    setIssues(prevIssues => [
      ...prevIssues,
      {
        id: Date.now(),   // unique id
        ...issue,
        status: "Open"
      }
    ]);
  };

  // ✅ Update Status
  const updateStatus = (id, newStatus) => {
    setIssues(prevIssues =>
      prevIssues.map(issue =>
        issue.id === id
          ? { ...issue, status: newStatus }
          : issue
      )
    );
  };

  // ✅ Delete Issue (FIXED - now using id)
  const deleteIssue = (id) => {
    setIssues(prevIssues =>
      prevIssues.filter(issue => issue.id !== id)
    );
  };

  return (
    <Router>

      {/* Navbar only if logged in */}
      {isAuth && <Navbar setIsAuth={setIsAuth} />}

      <Routes>

        {/* Login */}
        <Route
          path="/"
          element={
            isAuth
              ? <Navigate to="/dashboard" />
              : <Login setIsAuth={setIsAuth} />
          }
        />

        {/* Sign Up */}
        <Route
          path="/signup"
          element={
            isAuth
              ? <Navigate to="/dashboard" />
              : <SignUp />
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            isAuth ? (
              <Home
                issues={issues}
                addIssue={addIssue}
                deleteIssue={deleteIssue}
                updateStatus={updateStatus}   
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Reports */}
        <Route
          path="/reports"
          element={
            isAuth
              ? <Reports issues={issues} />
              : <Navigate to="/" />
          }
        />

        {/* Unknown Route */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;