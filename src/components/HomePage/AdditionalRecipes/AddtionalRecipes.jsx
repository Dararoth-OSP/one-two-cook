import React from "react";
import PjumBenMeals from "../../../assets/pjumben-meals.jpg";
import MealsLists from "./MealsLists";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddtionalRecipes = () => {
  return (
    <div className="flex max-w-[1150px] mx-auto sm:px-4 border-t-2 py-14 justify-center">
      {/* <div className="relative">

      </div> */}
      <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-5">
        <div className="row-span-5">
          <div
            className="h-[452px] relative text-white"
            style={{
              backgroundImage: `url(${PjumBenMeals})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bg-gradient-to-t from-black to-transparent lg:bg-gradient-to-t xl:from-transparent w-full bottom-0 xl:-bottom-72 p-4 xl:p-0 space-y-2 xl:space-y-10">
              <h1 className="text-5xl font-bold drop-shadow-[2px_2px_7px_#000000] xl:drop-shadow-none xl:text-black">
                Pchum Ben Recipes
              </h1>
              <p className="text-xl drop-shadow-[2px_2px_7px_#000000] xl:drop-shadow-none xl:text-black">
                Delicious recipe for this up coming Pchum Ben
              </p>
              <Link
                to="/foods"
                className="text-[#f56040] xl:float-right drop-shadow-[2px_2px_7px_#000000] xl:drop-shadow-none flex items-center gap-2 text-2xl font-bold mr-6"
              >
                See More <FaChevronRight />
              </Link>
            </div>
          </div>
        </div>
        <MealsLists />
        <MealsLists />
        <MealsLists />
        <MealsLists />
        <MealsLists />
      </div>
    </div>
  );
};

export default AddtionalRecipes;
