import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Loginpg';
import Register from './components/Register';
import Sample from './components/Sample';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/sample" element={<Sample />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);