import React, { useState } from "react";
import RandomButton from "../../components/RandomButton";
import RandomCard from "../../components/RandomCard";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const RandomDrink = () => {
  const [randomDrink, setRandomDrink] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDrinkHandler = async function () {
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

      const loadedDrinks = [];

      for (const key in data) {
        if (data[key].type === "drink") {
          loadedDrinks.push({
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

      const randomIndex = Math.floor(Math.random() * loadedDrinks.length);
      const randomObject = loadedDrinks[randomIndex];

      setRandomDrink(randomObject);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <RandomCard data={randomDrink} isLoading={isLoading}/>
      <div
        className={`flex justify-center rounded-3xl ${randomDrink.length === 0 && "h-20"}`}
      >
        {isLoading && randomDrink.length === 0 && <LoadingSpinner />}
      </div>
      <div className="flex my-12 justify-center">
        <RandomButton randomClicked={fetchDrinkHandler} isLoading={isLoading}/>
      </div>
    </React.Fragment>
  );
};

export default RandomDrink;
