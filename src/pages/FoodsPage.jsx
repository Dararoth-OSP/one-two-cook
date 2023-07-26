import React, { useEffect, useState, useCallback } from "react";
import PageBanner from "../components/PageBanner";
import CuisineList from "../components/CuisineList";
import CardSkeleton from "../components/UI/CardSkeleton";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  const fetchFoodHandler = useCallback(async function () {
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

      setFoods(loadedFoods);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchFoodHandler();
  }, [fetchFoodHandler]);

  return (
    <div>
      <PageBanner
        image="https://t3.ftcdn.net/jpg/01/54/14/86/360_F_154148685_yvijeC6L2SFpvqFJ5H1lunPg40FzCAf1.jpg"
        title="Food"
        text="Find the most recent and popular recipes all over the world from our
          extensive collections."
      />
      {foods.length === 0 && <CardSkeleton />}
      <CuisineList data={foods} />
    </div>
  );
};

export default Foods;
