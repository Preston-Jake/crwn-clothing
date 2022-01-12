import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components/header/header.component';

import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
