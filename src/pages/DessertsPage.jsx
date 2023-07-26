import React, { useCallback, useState, useEffect } from "react";
import PageBanner from "../components/PageBanner";
import CuisineList from "../components/CuisineList";
import CardSkeleton from "../components/UI/CardSkeleton";

const Desserts = () => {
  const [desserts, setDesserts] = useState([]);

  const fetchDessertHandler = useCallback(async function () {
    try {
      const response = await fetch(
        "https://one-two-cook-default-rtdb.asia-southeast1.firebasedatabase.app/recipe.json/"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedDesserts = [];

      for (const key in data) {
        if (data[key].type === "dessert") {
          loadedDesserts.push({
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
      setDesserts(loadedDesserts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchDessertHandler();
  }, [fetchDessertHandler]);

  return (
    <div>
      <PageBanner
        image="https://cdn.hswstatic.com/gif/desserts-update.jpg"
        title="Dessert"
        text="Find the most recent and popular desserts all over the world from our
        extensive collections."
      />
      {desserts.length === 0 && <CardSkeleton />}
      <CuisineList data={desserts} />
    </div>
  );
};

export default Desserts;
