import React from "react";
import PageBanner from "../components/PageBanner";
import { NavLink, Outlet } from "react-router-dom";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const RandomLayout = () => {
  return (
    <div>
      <PageBanner
        image="https://food.unl.edu/newsletters/images/family-meal-food.jpg"
        title="Random Recipe"
        text="Don't know what to eat ? Try to random some food to cook"
      />
      <nav className="flex justify-center gap-5 md:gap-10 my-10 text-sm md:text-xl font-bold">
        <NavLink
          to="food"
          className={({ isActive }) =>
            isActive ? "text-orange-600 " : undefined
          }
        >
          Foods
        </NavLink>
        <span className="border"></span>
        <NavLink
          to="drink"
          className={({ isActive }) =>
            isActive ? "text-orange-600 " : undefined
          }
        >
          Drinks
        </NavLink>
        <span className="border"></span>
        <NavLink
          to="dessert"
          className={({ isActive }) =>
            isActive ? "text-orange-600" : undefined
          }
        >
          Desserts
        </NavLink>
      </nav>
    </div>
  );
};

export default RandomLayout;
