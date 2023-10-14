import React, { useState } from "react";

function FormReact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    postal: "",
    comments: false,
    candidates: false,
    offers: false,
    mode: "",
  });

  /*
  function changeHandler(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }
  */

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler() {
    console.log(formData);
  }

  return (
    <div className="flex justify-center">
      <div className="border-2 border-neutral-400 w-3/6 p-8">
        <form>
          <label htmlFor="fname" className="font-bold">
            {" "}
            First Name{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="Pranay"
            id="fname"
            name="firstname"
            onChange={changeHandler}
            value={formData.firstname}
            className="border-2 border-gray-200 rounded-md w-full"
            required
          />
          <br />

          <label htmlFor="lname" className="font-bold">
            {" "}
            Last Name{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="Gupta"
            id="lname"
            name="lastname"
            onChange={changeHandler}
            value={formData.lastname}
            className="border-2 border-gray-200 rounded-md w-full"
            required
          />
          <br />

          <label htmlFor="emailadd" className="font-bold">
            {" "}
            E-Mail Address{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="pgupta99@gmail.com"
            id="emailadd"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            className="border-2 border-gray-200 rounded-md w-full"
            required
          />
          <br />

          <label className="font-bold">
            Country
            <br />
            <select
              onChange={changeHandler}
              value={formData.country}
              name="country"
              className="border-2 border-gray-200 rounded-md w-full"
              required
            >
              <option
                value=""
                disabled
                selected
                className="font-medium text-red-50"
              >
                Select a country
              </option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Australia">Australia</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="UAE">UAE</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
              <option value="Argentina">Argentina</option>
              <option value="Portugal">Portugal</option>
              <option value="Russia">Russia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
            </select>
          </label>
          <br />

          <label htmlFor="street" className="font-bold">
            Street
          </label>
          <br />
          <input
            type="text"
            placeholder="1234 Main St"
            id="street"
            name="street"
            onChange={changeHandler}
            value={formData.street}
            className="border-2 border-gray-200 rounded-md w-full"
            required
          />
          <br />

          <label htmlFor="city" className="font-bold">
            {" "}
            City{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="Berlin"
            id="city"
            name="city"
            onChange={changeHandler}
            value={formData.city}
            className="border-2 border-gray-200 rounded-md w-full"
            required
          />
          <br />

          <label htmlFor="state" className="font-bold">
            {" "}
            State / Province{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="West Bengal"
            id="state"
            name="state"
            onChange={changeHandler}
            value={formData.state}
            className="border-2 border-gray-200 rounded-md w-full"
            required
          />
          <br />

          <label htmlFor="zip" className="font-bold">
            {" "}
            ZIP / Postal Code{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="226006"
            id="zip"
            name="postal"
            onChange={changeHandler}
            value={formData.postal}
            className="border-2 border-gray-200 rounded-md w-full"
          />
          <br />
          <br />
          <div>
            <h1 className="font-bold">By EMail</h1>
            <br />

            <div className="flex justify-normal ">
              <input
                type="checkbox"
                name="comments"
                id="notify1"
                value="Comments"
                onChange={changeHandler}
                checked={formData.comments}
              />

              <label htmlFor="notify1" className="mx-4 font-bold">
                Comments
              </label>
            </div>
            <p className="mx-8 text-gray-500">
              Get notified when someone posts a comment on a posting
            </p>

            <div className="flex justify-normal">
              <input
                type="checkbox"
                name="candidates"
                id="notify2"
                value="Candidates"
                onChange={changeHandler}
                checked={formData.candidates}
              />

              <label htmlFor="notify2" className="mx-4 font-bold">
                Candidates
              </label>
            </div>
            <p className="mx-8 text-gray-500">
              Get notified when candidate apply for a job.
            </p>

            <div className="flex justify-normal ">
              <input
                type="checkbox"
                name="offers"
                id="notify3"
                value="Offers"
                onChange={changeHandler}
                checked={formData.offers}
              />

              <label htmlFor="notify3" className="mx-4 font-bold">
                Offers
              </label>
            </div>
            <p className="mx-8 text-gray-500">
              Get notified when candidate accepts or rejects an offer.
            </p>
            <br />
          </div>

          <div>
            <h1 className="font-bold"> Push Notifications</h1>

            <p className="text-gray-500">
              These are delivered via SMS to your phone.
            </p>
            <input
              type="radio"
              id="everything"
              name="mode"
              value="Everything"
              onChange={changeHandler}
              checked={formData.mode === "Everything"}
              required
            />

            <label
              htmlFor="everything"
              className="mx-2 text-gray-800 font-medium"
            >
              Everything
            </label>
            <br />
            <input
              type="radio"
              id="sameasemail"
              name="mode"
              value="Same As E-Mail"
              onChange={changeHandler}
              checked={formData.mode === "Same As E-Mail"}
            />

            <label
              htmlFor="sameasemail"
              className="mx-2 text-gray-800 font-medium"
            >
              Same As E-Mail
            </label>
            <br />
            <input
              type="radio"
              id="phone"
              name="mode"
              value="Phone Number"
              onChange={changeHandler}
              checked={formData.mode === "Phone Number"}
            />
            <label htmlFor="phone" className="mx-2 text-gray-800 font-medium">
              Phone Number
            </label>
          </div>

          <br />
          <button
            className="bg-blue-500 rounded-md bg-blue-600 text-white px-6 py-2"
            onClick={submitHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormReact;
