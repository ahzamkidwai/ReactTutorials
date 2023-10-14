import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

function SignupForm() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  function changeHandler(event) {
    // Use the correct function name setFormData, and update the state properly
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function toggleShowPasswordHandler1() {
    setShowPassword1((showPassword1) => !showPassword1);
  }

  function toggleShowPasswordHandler2() {
    setShowPassword2((showPassword2) => !showPassword2);
  }

  return (
    <div>
      <div className="flex gap-2 justify-center">
        <button name="student"> Student </button>
        <span>
          <button name="instructor"> Instructor </button>
        </span>
      </div>
      {}
      <form>
        <div>
          <label>
            First Name <sup>*</sup>
            <br />
            <input
              required
              type="text"
              name="firstname"
              id="firstname"
              onChange={changeHandler}
              value={formData.firstname}
            />
            <br />
          </label>
          <label>
            Last Name <sup>*</sup>
            <br />
            <input
              required
              type="text"
              name="lastname"
              id="lastname"
              onChange={changeHandler}
              value={formData.lastname}
            />
            <br />
          </label>
        </div>

        <div>
          <label>
            E-Mail <sup>*</sup>
            <br />
            <input
              required
              type="email"
              name="email"
              id="email"
              onChange={changeHandler}
              value={formData.email}
            />
            <br />
          </label>
        </div>

        <div>
          <label>
            Password <sup>*</sup>
            <br />
            <input
              required
              type={showPassword1 ? "text" : "password"}
              name="password"
              id="password"
              onChange={changeHandler}
              value={formData.password}
            />
            <span onClick={toggleShowPasswordHandler1}>
              {showPassword1 ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
            <br />
          </label>
          <label>
            Confirm Password <sup>*</sup>
            <br />
            <input
              required
              type={showPassword2 ? "text" : "password"}
              name="confirmpassword"
              id="password"
              onChange={changeHandler}
              value={formData.confirmpassword}
            />
            <span onClick={toggleShowPasswordHandler2}>
              {showPassword2 ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
            <br />
          </label>
        </div>

        <div>
          <button>Create Account</button>
        </div>

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <div>
            <div className="border-2 border-red-400">
              <button >
                <FcGoogle />
                <span>Sign In with Google</span>
              </button>
            </div>
          </div>
      </form>
    </div>
  );
}

export default SignupForm;
