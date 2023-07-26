import React from "react";
import KitchenWareCard from "./KitchenWareCard";
import ReviewStars from "./UI/ReviewStars";
import FavoriteButton from "./Favorite/FavoriteButton";

const RecipeDetailLayout = ({ recipe }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8">
        <div
          className="max-w-4xl border relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[550px] rounded-[30px]"
          style={{
            backgroundImage: `url(${recipe.imgURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <FavoriteButton favData={recipe}/>
        </div>
        <div>
          <h1 className="text-5xl font-bold lg:mt-16">{recipe.title}</h1>
          <p className="text-lg my-10">{recipe.description}</p>
          <ReviewStars />
          <div className="flex gap-10 mt-12 mb-7">
            <h1 className="text-4xl font-medium">
              {recipe.prepTime}{" "}
              <span className="block font-light">Minutes</span>
            </h1>
            {recipe.calories !== "" && (
              <h1 className="text-4xl font-medium">
                {recipe.calories}
                <span className="block font-light">Calories</span>
              </h1>
            )}
          </div>
          <p className="font-medium">{recipe.notice}</p>
        </div>
      </div>
      <h1 className="font-bold text-4xl my-8">Required Kitchen Ware</h1>
      <div className="relative flex items-center">
        <div className="w-full h-full space-x-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
          <KitchenWareCard />
          <KitchenWareCard />
          <KitchenWareCard />
          <KitchenWareCard />
          <KitchenWareCard />
          <KitchenWareCard />
          <KitchenWareCard />
          <KitchenWareCard />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-14 my-14 ">
        <div className="basis-[60%] text-2xl space-y-5 font-semibold">
          <h1 className="text-4xl font-bold mb-7">Instrutions</h1>
          <p className="leading-loose">{recipe.instruction}</p>
        </div>
        <div className="basis-[50%] text-2xl space-y-5">
          <h1 className="text-4xl font-bold mb-7">Ingredients</h1>
          <p>{recipe.ingredient}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailLayout;
