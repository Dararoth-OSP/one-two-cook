import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

const ReviewStars = () => {
  return (
    <React.Fragment>
      <span className="text-lg block my-2">Easy</span>
      <span className="flex gap-2">
        <BsStarFill className="w-7 h-7" />
        <BsStarFill className="w-7 h-7" />
        <BsStarFill className="w-7 h-7" />
        <BsStarFill className="w-7 h-7" />
        <BsStar className="w-7 h-7" />
      </span>
    </React.Fragment>
  );
};

export default ReviewStars;
