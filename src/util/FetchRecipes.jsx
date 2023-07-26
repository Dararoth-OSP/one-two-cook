// FetchFoods.js
import React, { useState, useEffect, useCallback } from 'react';

const FetchRecipes = ({ type }) => {
  const [loadedFoods, setLoadedFoods] = useState([]);

  const fetchFoodHandler = useCallback(async function () {
    try {
      const response = await fetch(
        "https://one-two-cook-default-rtdb.asia-southeast1.firebasedatabase.app/recipe.json/"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const filteredFoods = Object.values(data).filter((item) => item.type === type);

      const loadedFoods = filteredFoods.map((item, key) => ({
        id: key,
        ...item,
      }));

      setLoadedFoods(loadedFoods);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [type]);

  useEffect(() => {
    fetchFoodHandler();
  }, [fetchFoodHandler]);

  return loadedFoods; // Return the loadedFoods data after fetching and filtering
};

export default FetchRecipes;
