import React from "react";
import AddtionalRecipes from "../components/HomePage/AdditionalRecipes/AddtionalRecipes";
import HomeBanner from "../components/HomePage/HomeBanner";
import FeaturesRecipe from "../components/HomePage/FeaturesRecipe";
import MealsMenu from "../components/HomePage/MealsMenu/MealsMenu";
import RandomRecipe from "../components/RandomRecipe";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 max-w-[1150px] mx-auto justify-center my-14 gap-28 xl:gap-48 items-center">
        <FeaturesRecipe />
        <RandomRecipe />
      </div>
      <MealsMenu />
      <AddtionalRecipes />
    </div>
  );
};

export default Home;
