import "./App.css";
import HeaderFooter from "./components/Layout/HeaderFooter";
import CreateRecipe from "./pages/NewRecipePage";
import RecipeDetail from "./pages/RecipeDetail";
import Foods from "./pages/FoodsPage";
import Drinks from "./pages/DrinksPage";
import Desserts from "./pages/DessertsPage";
import Home from "./pages/HomePage";
import Random from "./pages/RandomRecipePage";
import ErrorPage from "./components/Error";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
} from "react-router-dom";
import RandomFood from "./pages/RandomRecipe/RandomFood";
import RandomDrink from "./pages/RandomRecipe/RandomDrink";
import RandomDessert from "./pages/RandomRecipe/RandomDessert";
import SearchPage from "./pages/SearchPage";
import { useLayoutEffect } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/one-two-cook/" element={<HeaderFooter />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />

      <Route path="/one-two-cook/foods" element={<Foods />} />
      <Route path="/one-two-cook/foods/:recipeId" element={<RecipeDetail />} />

      <Route path="/one-two-cook/drinks" element={<Drinks />} />
      <Route path="/one-two-cook/drinks/:recipeId" element={<RecipeDetail />} />

      <Route path="/one-two-cook/desserts" element={<Desserts />} />
      <Route path="/one-two-cook/desserts/:recipeId" element={<RecipeDetail />} />

      <Route path="/one-two-cook/new-recipe" element={<CreateRecipe />} />

      <Route path="/one-two-cook/random-recipe/" element={<Random />}>
        <Route
          index
          element={
            <p className="text-center font-bold my-28">
              Select Recipe Type to Random
            </p>
          }
        />
        <Route path="food" element={<RandomFood />} />

        <Route path="drink" element={<RandomDrink />} />

        <Route path="dessert" element={<RandomDessert />} />
      </Route>
      <Route path="/one-two-cook/random-recipe/food/:recipeId" element={<RecipeDetail />} />
      <Route path="/one-two-cook/random-recipe/drink/:recipeId" element={<RecipeDetail />} />
      <Route
        path="/one-two-cook/random-recipe/dessert/:recipeId"
        element={<RecipeDetail />}
      />
      <Route path="/one-two-cook/search-page" element={<SearchPage />} />
      <Route path="/one-two-cook/search-page/:recipeId" element={<RecipeDetail />} />

      <Route path="/one-two-cook/*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
