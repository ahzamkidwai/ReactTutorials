import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
