import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VirtualLab from './pages/main/VirtualLab';
import Courses from './pages/main/Courses';
import Certificate from './pages/main/Certificate';
import Events from './pages/main/Events';
import Profile from './pages/main/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <RouteHandler />
      </div>
    </Router>
  );
}

function RouteHandler() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken && window.location.pathname !== '/login' && window.location.pathname !== '/register') {
      // Token not found, navigate to /login
      setToken(null);
      window.location.href = '/login';
    } else {
      setToken(storedToken);
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<VirtualLab />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/courses" element={<Courses />} />
      <Route exact path="/certificate" element={<Certificate />} />
      <Route exact path="/events" element={<Events />} />
    </Routes>
  );
}

export default App;
