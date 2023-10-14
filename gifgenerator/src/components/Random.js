import React, { useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("");
  console.log("API_KEY:", API_KEY);
  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
  }

  function clickHandler() {
    fetchData();
  }
  console.log("API_KEY:", API_KEY);

  return (
    <div className="bg-green-600 w-1/2  rounded-lg text-white border border-green-950 flex flex-col items-center">
      <h1 className="text-2xl font-semibold underline uppercase text-black ">
        Random GIF
      </h1>
      <img src={gif} width="450" alt="" />
      <button
        onClick={clickHandler}
        className="bg-white w-9/12 text-green-950 opacity-90 font-semibold py-1 my-4"
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
