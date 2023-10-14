import React from "react";
import LoginForm from "../components/loginForm";
import SignupForm from "../components/signupForm";

function template(props) {
  //let isLoggedIn = props.isLoggedIn;
  //let setLoggedIn = props.setLoggedIn();

  return (
    <div>
      <div>
        <div>
          <h1> {props.heading} </h1>
        </div>
        <div>
          <p>{props.desc1} </p>
          <p>{props.desc2} </p>
        </div>
        <div>{props.formtype === "login" ? (<LoginForm />) : (<SignupForm />)}</div>
      </div>
    </div>
  );
}

export default template;
