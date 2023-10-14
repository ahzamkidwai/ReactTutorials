import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;

  console.log(
    "Navbar mei hain hum log aur islogged in ki value hain " + isLoggedIn
  );

  function loggedOutHandler() {
    setLoggedIn(true);
  }

  return (
    <div className="flex flex-row items-center justify-evenly">
      <div>
        <NavLink to="/">
          <img
            src="https://img.freepik.com/premium-photo/blue-sign-with-globe-it_825862-851.jpg"
            alt=""
            className="h-16"
          />
        </NavLink>
      </div>
      <div>
        <ul className="flex justify-center items-center">
          <li>
            {" "}
            <NavLink isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} to="/">
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              isLoggedIn={isLoggedIn}
              setLoggedIn={setLoggedIn}
              to="/about"
            >
              {" "}
              About{" "}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              isLoggedIn={isLoggedIn}
              setLoggedIn={setLoggedIn}
              to="/contact"
            >
              {" "}
              Contact{" "}
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        {isLoggedIn && (
          <button className="bg-gray-700 px-4 hover:bg-gray-900 mx-2 py-2 text-white">
            <NavLink
              isLoggedIn={isLoggedIn}
              setLoggedIn={setLoggedIn}
              to="/login"
            >
              Login
            </NavLink>
          </button>
        )}
        {!isLoggedIn && (
          <button
            className="bg-gray-700 px-4 hover:bg-gray-900 mx-2 py-2 text-white"
            onClick={loggedOutHandler}
          >
            <NavLink isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} to="/">
              Logout{" "}
            </NavLink>
          </button>
        )}
        {!isLoggedIn && (
          <button className="bg-gray-700 px-4 hover:bg-gray-900 mx-2 py-2 text-white">
            <NavLink
              isLoggedIn={isLoggedIn}
              setLoggedIn={setLoggedIn}
              to="/dashboard"
            >
              Dashboard{" "}
            </NavLink>
          </button>
        )}
        {isLoggedIn && (
          <button className="bg-gray-700 px-4 hover:bg-gray-900 mx-2 py-2 text-white">
            <NavLink
              isLoggedIn={isLoggedIn}
              setLoggedIn={setLoggedIn}
              to="/signup"
            >
              Sign Up{" "}
            </NavLink>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
