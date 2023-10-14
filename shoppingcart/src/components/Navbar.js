import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <div>
          <img
            src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png"
            alt=""
            className="h-16"
          />
        </div>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            {" "}
            <AiOutlineShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
