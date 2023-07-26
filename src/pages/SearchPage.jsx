import React, { useEffect, useState } from "react";
import CardSkeleton from "../components/UI/CardSkeleton";
import BadgeNumber from "../components/UI/BadgeNumber";
import { useSelector } from "react-redux";
import CuisineList from "../components/CuisineList";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const searchItems = useSelector((state) => state.search.searchItems);
  const searchInput = useSelector((state) => state.search.searchInput);

  const [typeItems, setTypeItems] = useState(searchItems);
  const [category, setCategory] = useState("All");

  const foodItems = searchItems.filter((item) => item.type === "food");
  const drinkItems = searchItems.filter((item) => item.type === "drink");
  const dessertItems = searchItems.filter((item) => item.type === "dessert");

  useEffect(() => {
    setTypeItems(searchItems);
  }, [searchItems]);

  return (
    <div className="max-w-[1150px] mx-auto px-4 mb-20">
      <h1 className="text-center my-8 text-xl">
        Your search result for{" "}
        <span className="font-bold">"{searchInput}"</span>
      </h1>
      <div className="border-b-2 font-bold flex gap-4 pb-3 ">
        <button
          className={`${category === "All" && "text-orange-600"}`}
          onClick={() => {
            setTypeItems(searchItems);
            setCategory("All");
          }}
        >
          All results <BadgeNumber number={searchItems.length} />
        </button>
        <span className="border"></span>
        <button
          className={`${category === "foods" && "text-orange-600"}`}
          onClick={() => {
            setTypeItems(foodItems);
            setCategory("foods");
          }}
        >
          Foods <BadgeNumber number={foodItems.length} />
        </button>
        <span className="border"></span>
        <button
          className={`${category === "drinks" && "text-orange-600"}`}
          onClick={() => {
            setTypeItems(drinkItems);
            setCategory("drinks");
          }}
        >
          Drinks <BadgeNumber number={drinkItems.length} />
        </button>
        <span className="border"></span>
        <button
          className={`${category === "desserts" && "text-orange-600"}`}
          onClick={() => {
            setTypeItems(dessertItems);
            setCategory("desserts");
          }}
        >
          Desserts <BadgeNumber number={dessertItems.length} />
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 ">
        {typeItems.map((food) => (
          <Card
            key={food.id}
            id={food.id}
            type={food.type}
            title={food.title}
            description={food.description}
            difficulty={food.difficulty}
            prepTime={food.prepTime}
            img={food.imgURL}
          />
        ))}
      </ul>
      {typeItems.length === 0 && (
        <p className="text-center mb-40 mt-20">
          No result founded in{" "}
          {
            <Link
              to={`/${category !== "All" ? category : "foods"}`}
              className="font-semibold underline"
            >
              {category}
            </Link>
          }{" "}
          category!
        </p>
      )}
    </div>
  );
};

export default SearchPage;
