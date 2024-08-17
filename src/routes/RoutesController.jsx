import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Product from './product/Product';
import Login from './login/Login';

const RoutesController = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
  );
};

export default RoutesController;
