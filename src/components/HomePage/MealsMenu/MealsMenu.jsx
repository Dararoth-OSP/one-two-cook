import React from "react";
import MealCard from "./MealCard";
import { Link } from "react-router-dom";

const MealsMenu = () => {
  return (
    <div className="mt-36  mx-auto">
      <h1 className="text-4xl max-w-[1150px] px-4 mx-auto font-bold my-10">
        With the ingredient in your Pantry you can cook...
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 mx-4 sm:mx-6 lg:mx-10 xl:mx-20 2xl:mx-56">
        <li>
          <MealCard />
        </li>
        <li>
          <MealCard />
        </li>
        <li>
          <MealCard />
        </li>
      </ul>
      <Link to='/foods' className="block max-w-[130px] text-center bg-[#f56040] text-white rounded-2xl my-14 font-bold mx-auto py-1.5">
        See More
      </Link>
    </div>
  );
};

export default MealsMenu;
