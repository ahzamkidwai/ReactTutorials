import React from "react";
import { useState } from "react";

function WebApp() {
  const [val, setVal] = useState(0);

  function decrementValue() {
    setVal(val - 1);
  }

  function incrementValue() {
    setVal(val + 1);
  }

  function resetValue(){
    setVal(0);
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-[#C23373]">
        <div className="px-8 py-2 text-2xl text-[#79155B] font-bold">
          Increment & Decrement App (Using React)
        </div>
        <br />
        <div className="flex flex-row justify-around bg-[#F6635C] text-3xl px-4">
          <button onClick={decrementValue} className="py-2 px-8 text-[#79155B]"> - </button>
          <div className="py-2 px-8 text-[#79155B]"> {val} </div>
          <button onClick={incrementValue} className="py-2 px-8 text-[#79155B]"> + </button>
        </div>
        <br />
        <button onClick={resetValue} className="px-8 py-2 bg-[#79155B] text-[#F6635C] font-bold"> RESET </button>
      </div>
    </div>
  );
}

export default WebApp;
