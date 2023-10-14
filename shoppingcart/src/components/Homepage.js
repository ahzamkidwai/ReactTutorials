import React, { useEffect } from "react";
import { baseURL } from "../data";

function Homepage() {
  useEffect(() => {
    async function APIfunction() {
      const fetchAPI = await fetch(baseURL);
      const dataa = fetchAPI.json();
      console.log(dataa);
    }
    APIfunction();
  }, []);

  return (
    <div>
        <h1>{dataa[0].title}</h1>
    </div>
  );
}

export default Homepage;
