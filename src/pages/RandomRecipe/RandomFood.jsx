import React, { useState } from "react";
import RandomButton from "../../components/RandomButton";
import RandomCard from "../../components/RandomCard";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import LogoLoading from "../../components/UI/LogoLoading";

const RandomFood = () => {
  const [randomFood, setRandomFood] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFoodHandler = async function () {
    setIsLoading(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });

    try {
      const response = await fetch(
        "https://one-two-cook-default-rtdb.asia-southeast1.firebasedatabase.app/recipe.json/"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedFoods = [];

      for (const key in data) {
        if (data[key].type === "food") {
          loadedFoods.push({
            id: key,
            title: data[key].title,
            calories: data[key].calories,
            description: data[key].description,
            difficulty: data[key].difficulty,
            imgURL: data[key].imgURL,
            ingredient: data[key].ingredient,
            instruction: data[key].instruction,
            kitWare: data[key].kitWare,
            origin: data[key].origin,
            prepTime: data[key].prepTime,
            type: data[key].type,
            notice: data[key].notice,
          });
        }
      }

      const randomIndex = Math.floor(Math.random() * loadedFoods.length);
      const randomObject = loadedFoods[randomIndex];

      setRandomFood(randomObject);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <RandomCard data={randomFood} isLoading={isLoading} />
      <div
        className={`flex justify-center rounded-3xl ${
          randomFood.length === 0 && "h-20"
        }`}
      >
        {isLoading && randomFood.length === 0 && <LoadingSpinner />}
      </div>
      <div className="flex my-12 justify-center">
        <RandomButton randomClicked={fetchFoodHandler} isLoading={isLoading} />
      </div>
    </React.Fragment>
  );
};

export default RandomFood;
