import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonials(props) {
  let reviews = props.reviews;

  const [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let ind = Math.floor(Math.random() * reviews.length);;
    setIndex(ind);
  }

  return (
    <div className="w-[90vw] md:w-[800px] bg-white">
      <Card review={reviews[index]}></Card>
      <div className="flex justify-center text-3xl gap-4 mt-5 text-violet-500 font-bold">
        <button className="cursor-pointer" onClick={leftShiftHandler}>
          <FiChevronLeft className="hover:text-violet-700"></FiChevronLeft>
        </button>
        <button className="cursor-pointer" onClick={rightShiftHandler}>
          <FiChevronRight className="hover:text-violet-700"></FiChevronRight>
        </button>
      </div>
      <br />
      <div className="py-8">
        <button
          className="bg-violet-500 hover:bg-violet-700 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
          onClick={surpriseHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
