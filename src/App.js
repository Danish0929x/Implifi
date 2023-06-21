import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VirtualLab from './pages/main/VirtualLab';
import Courses from './pages/main/Courses';
import Certificate from './pages/main/Certificate';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<VirtualLab />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
