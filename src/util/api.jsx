const FIREBASE_DOMAIN =
  "https://one-two-cook-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function addRecipe(recipe) {
  // Validating the input post

  const response = await fetch(`${FIREBASE_DOMAIN}/recipe.json`, {
    method: "POST",
    body: JSON.stringify(recipe),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function getAllFoods() {
  const response = await fetch(`${FIREBASE_DOMAIN}/recipe.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch foods.");
  }

  const transformedFoods = [];

  for (const key in data) {
    const foodObj = {
      id: key,
      ...data[key],
    };

    transformedFoods.push(foodObj);
  }

  return transformedFoods;
}

export async function getAllDrinks() {
  const response = await fetch(
    "https://one-two-cook-default-rtdb.asia-southeast1.firebasedatabase.app/recipe.json"
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const transformedDrinks = [];

  for (const key in data) {
    if (data[key].type === "drink") {
      const drinkObj = {
        id: key,
        ...data[key],
      };

      transformedDrinks.push(drinkObj)
    }
  }
  
  return transformedDrinks;
}

export async function getSingleRecipe(recipeId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/recipe/${recipeId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedRecipe = {
    id: quoteId,
    ...data,
  };

  return loadedRecipe;
}

// export async function saveDraft(recipe) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/recipe.json`, {
//     method: "PUT",
//     body: JSON.stringify(recipe),
//   });

//   if (!response.ok) {
//     throw new Error("Saving recipe draft failed.");
//   }
// }
