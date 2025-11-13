import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Import all pages
import Login from "./customer-support/Login";
import Signup from "./customer-support/Signup";
import ForgotPassword from "./customer-support/ForgotPassword";
import Dashboard from "./customer-support/Dashboard";
import AgentLogin from "./customer-support/AgentLogin";
import AgentDashboard from "./customer-support/AgentDashboard";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <Router>
      <Routes>
        {/*  Customer Routes  */}
        <Route path="/" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />

        {/*  Agent Routes  */}
        <Route path="/agent-login" element={<AgentLogin />} />
        <Route
          path="/agent-dashboard"
          element={user ? <AgentDashboard /> : <Navigate to="/agent-login" />}
        />

        {/*Fallback route  */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
