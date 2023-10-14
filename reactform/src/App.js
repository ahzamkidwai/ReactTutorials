import { useState } from "react";
import "./App.css";

function App() {
  /*
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function changeFirstNameHandler(event) {
    //console.log("Printing First Name");
    //console.log(event.target.value);
    setFirstName(event.target.value);
  }

  function changeLastNameHandler(event) {
    //console.log("Printing Last Name");
    //console.log(event.target.value);
    setLastName(event.target.value); 
  }
  */

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
  });
  console.log(formData);

  /*
  function changeHandler(event){
    setFormData(prevStateForm=>({
      ...prevStateForm,
      [event.target.name] : event.target.value,
  }));
  }
  */

  /*
  */
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="First Name"
          className="border-2 border-red-400"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Last Name"
          className="border-2 border-red-400"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter your E-Mail here..."
          className="border-2 border-red-400"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br />
        <br />

        <textarea
          className="border-2 border-red-400"
          placeholder="Enter your comments"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        ></textarea>

        <br />
        <br />

        <input
          type="checkbox"
          className="border-2 border-red-400"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I visible? </label>

        <br />
        <br />

        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="online-mode"
          id="online-mode"
          checked={formData.mode === "online-mode"}
        />
        <label htmlFor="online-mode">Online Mode</label>
        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="offline-mode"
          id="offline-mode"
          checked={formData.mode === "offline-mode"}
        />
        <label htmlFor="offline-mode">Offline Mode</label>
        <br />
        
      </form>
    </div>
  );
}

export default App;
