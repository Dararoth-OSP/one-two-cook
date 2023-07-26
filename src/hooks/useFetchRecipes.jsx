import { useState, useEffect, useCallback } from "react";

function useFetchRecipes(type) {
  const [recipes, setRecipes] = useState([]);

  const fetchDrinkHandler = useCallback(
    async function () {
      try {
        const response = await fetch(
          "https://one-two-cook-default-rtdb.asia-southeast1.firebasedatabase.app/recipe.json/"
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();

        const loadedRecipes = [];

        for (const key in data) {
          if (data[key].type === type) {
            loadedRecipes.push({
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

        setDrinks(loadedRecipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [type]
  );

  useEffect(() => {
    fetchDrinkHandler();
  }, [fetchDrinkHandler]);

  return { recipes };
}

export default useFetchRecipes;
