import React, { useState } from 'react';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';
import './scss/app.scss';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="wrapper">
      <Header search={search} setSearch={setSearch} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchValue={search} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
