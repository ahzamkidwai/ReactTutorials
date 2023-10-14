import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


function Card(props) {
  let item = props.review;
  return (
    <div className="flex flex-col md:relative p-8">
      <div className="absolute top-[-7rem] z-[10] mx-auto ">
        <img
          src={item.image}
          alt=""
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
        />
        <div className="rounded-full w-[140px] h-[140px] z-25 bg-violet-500 absolute top-[-6px] z-[-20] left-[15px]">
          {" "}
        </div>
      </div>

      <div className="text-center mt-7 ">
        <h1 className=" font-bold text-3xl capitalize"> {item.name}</h1>
      </div>

      <div className="text-center mt-7 ">
        <p className=" text-sm text-violet-500 uppercase"> {item.job}</p>
      </div>
      <div className="mx-auto text-violet-500 mt-5">
        <FaQuoteLeft></FaQuoteLeft>
      </div>

      <div className="text-center mt-4 text-slate-500">
        <p>{item.text}</p>
      </div>

      <div className="mx-auto text-violet-500 mt-5">
        <FaQuoteRight></FaQuoteRight>
      </div>

      
    </div>
  );
}

export default Card;
