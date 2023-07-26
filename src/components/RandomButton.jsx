import React from "react";
import { BsFillDice3Fill } from "react-icons/bs";

const RandomButton = ({ randomClicked, isLoading }) => {

  return (
    <button
      disabled={isLoading}
      onClick={randomClicked}
      className="flex items-center gap-3 bg-[#f56040] transition ease-in-out hover:-translate-y-0.5 hover:scale-105 border-white hover:shadow-lg hover:border-b-8 hover:border-orange-300 text-white text-2xl px-14 py-8 mx-4 rounded-3xl"
    >
      <BsFillDice3Fill className={`w-10 h-10`} /> Random Recipe
    </button>
  );
};

export default RandomButton;
