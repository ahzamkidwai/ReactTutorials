import "./App.css";
import MainHome from "./pages/mainHome";
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard";
import { useState } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  
  return (
    <div className="App">
      <div>
        <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>

        <Routes>
          <Route path="/" element={<MainHome />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<div> ERROR 404! Not Found!!! </div>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
