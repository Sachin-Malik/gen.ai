import './App.css';
import React, { useState } from 'react';
import Home from './screens/Home';
import { Routes, Route } from "react-router-dom";
import Cart from './screens/Cart';
function App() {

  const [toast, setToast] = useState('');
  function showToast(message) {
    setToast(message + ' added to cart');
    setTimeout(() => {
      setToast('');
    }, 2000)
  }
  return (
    <Routes>
      <Route path='/' element={<Home toast={toast} showToast={showToast} />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>

  );
}

export default App;
