import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function LoginForm(props) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;

  function changeButtonHandler() {
    setLoggedIn(true);
  }

  function toggleShowPasswordHandler() {
    setShowPassword((showPassword) => !showPassword);
  }

  console.log(formData);

  return (
    <div>
      <form>
        <div>
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

            <label>
              Password <sup>*</sup>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                onChange={changeHandler}
                value={formData.password}
              />
              <span onClick={toggleShowPasswordHandler}>
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </label>
          </div>

          <Link>Forgot Password</Link>

          <br />

          <button onChange={changeButtonHandler}> Sign In</button>

          <div>
            <div></div>
            <p>OR</p>
            <div></div>
          </div>

          <div>
            <div className="border-2 border-red-400">
              <button>
                <FcGoogle />
                <span>Sign In with Google</span>
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={props.image1} alt="" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
