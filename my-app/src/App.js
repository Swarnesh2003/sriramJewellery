import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products"
import Dashboard from "./components/webtraffic"
import Category1 from './components/Category1';

function App(){
    
    return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/:category/:subcategory" element={<Products />} />
        <Route path="/category" element={<Category1 />} />
      </Routes>
    </Router>
);
}
export default App;