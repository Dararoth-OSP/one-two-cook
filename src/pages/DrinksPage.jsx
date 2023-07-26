import React, { useCallback, useState, useEffect } from "react";
import PageBanner from "../components/PageBanner";
import CuisineList from "../components/CuisineList";
import CardSkeleton from "../components/UI/CardSkeleton";
// import useHttp from "../hooks/use-http";
// import { getAllDrinks } from "../util/api";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);

  const fetchDrinkHandler = useCallback(async function () {
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

      setDrinks(loadedDrinks);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchDrinkHandler();
  }, [fetchDrinkHandler]);

  return (
    <div>
      <PageBanner
        image="https://i.insider.com/5bc8b1cdfc7e1632221a09f2?width=1200&format=jpeg"
        title="Drink"
        text="Find the most recent and popular drinks all over the world from our
            extensive collections."
      />
      {(drinks.length === 0) && (
        <CardSkeleton />
      )}
      <CuisineList data={drinks} />
    </div>
  );
};

export default Drinks;
