import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Register from './Register';
import Books from './Books';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/book">Register</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
