import React from 'react';
import { Header } from './components/Header.tsx';
import { Home } from './pages/Home.tsx';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound.tsx';
import { Cart } from './pages/Cart.tsx';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
