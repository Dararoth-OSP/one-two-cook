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
    <Route path="/" element={<HeaderFooter />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />

      <Route path="/foods" element={<Foods />} />
      <Route path="/foods/:recipeId" element={<RecipeDetail />} />

      <Route path="/drinks" element={<Drinks />} />
      <Route path="/drinks/:recipeId" element={<RecipeDetail />} />

      <Route path="/desserts" element={<Desserts />} />
      <Route path="/desserts/:recipeId" element={<RecipeDetail />} />

      <Route path="/new-recipe" element={<CreateRecipe />} />

      <Route path="/random-recipe/" element={<Random />}>
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
      <Route path="/random-recipe/food/:recipeId" element={<RecipeDetail />} />
      <Route path="/random-recipe/drink/:recipeId" element={<RecipeDetail />} />
      <Route
        path="/random-recipe/dessert/:recipeId"
        element={<RecipeDetail />}
      />
      <Route path="/search-page" element={<SearchPage />} />
      <Route path="/search-page/:recipeId" element={<RecipeDetail />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
