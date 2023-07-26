import React from "react";
import RandomButton from "./RandomButton";
import { Link } from "react-router-dom";

const RandomRecipe = () => {
  return (
    <Link to="/random-recipe" className="text-center">
      <h1 className="text-4xl font-bold ">Random Recipe</h1>
      <span className="block my-5 text-lg">
        Don't know what to cook? <br />
        Discover random recipe you'll likely love.
      </span>
      <div className="flex justify-center">
        <RandomButton />
      </div>
    </Link>
  );
};

export default RandomRecipe;
