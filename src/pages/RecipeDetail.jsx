import React, { useEffect, useCallback, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import RecipeDetailLayout from "../components/RecipeDetailLayout";
import DetailSkeleton from "../components/UI/DetailSkeleton";
import { MdOutlineArrowBackIos } from "react-icons/md";

const RecipeDetail = (props) => {
  const [loadedRecipe, setLoadedRecipe] = useState(null);

  const param = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname;
  const urlPath = url.split("/");
  const prevURL = urlPath[1];

  const { recipeId } = param;

  const fetchRecipeHandler = useCallback(
    async function () {
      try {
        const response = await fetch(
          `https://one-two-cook-default-rtdb.asia-southeast1.firebasedatabase.app/recipe/${recipeId}.json`
        );

        if (!response.ok) {
          throw new Error(data.message || "Could not fetch recipe.");
        }

        const data = await response.json();

        const loadedRecipe = {
          id: recipeId,
          ...data,
        };

        setLoadedRecipe(loadedRecipe);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [recipeId]
  );

  useEffect(() => {
    fetchRecipeHandler();
  }, [fetchRecipeHandler, recipeId]);

  return (
    <div className="max-w-[1150px] px-4 mx-auto relative my-14">
      <div
        onClick={() => navigate(-1)}
        className="absolute group/prevPage flex items-center gap-x-2 font-medium  cursor-pointer text-zinc-400 -top-14 "
      >
        <MdOutlineArrowBackIos className=" w-4 h-4  my-5" />{" "}
        <span className="group-hover/prevPage:underline">{prevURL}</span>
      </div>
      {loadedRecipe === null && <DetailSkeleton />}
      {loadedRecipe !== null && <RecipeDetailLayout recipe={loadedRecipe} />}
    </div>
  );
};

export default RecipeDetail;
