import React from "react";
import Template from "../components/template";
function login(props) {
  return (
    <Template
      heading="Welcome Back"
      desc1="Build skills for today, tomorrow and beyond."
      desc2="Education to future-proof your career."
      formtype="login"
      image1="https://pngimg.com/d/student_PNG93.png"
      isLoggedIn={props.isLoggedIn}
      setLoggedIn={props.setLoggedIn}
    />
  );
}

export default login;
