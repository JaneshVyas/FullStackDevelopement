import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>
      <center><h3>Prepared by - 20CS102 Janesh Vyas</h3></center>
    </>
  );
}

export default App;