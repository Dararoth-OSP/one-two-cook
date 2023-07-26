import { useEffect } from "react";
import NewRecipeForm from "../components/NewRecipeForm";
import useHttp from "../hooks/use-http";
import { addRecipe } from "../util/api";

const CreateRecipe = () => {
  const { sendRequest, status } = useHttp(addRecipe);

  const addRecipeHandler = (recipeData) => {
    sendRequest(recipeData);
  };

  return (
    <div>
      <NewRecipeForm
        isLoading={status === "pending"}
        onAddRecipe={addRecipeHandler}
      />
    </div>
  );
};

export default CreateRecipe;
