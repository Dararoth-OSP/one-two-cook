import React from "react";
import TunaSalad from "../../../assets/tuna-salad.jpg";

const MealCard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Tuna Salad</h1>
      <div className="rounded-xl border hover:border-none hover:shadow-2xl hover:scale-105 duration-200">
        <div
          className="h-96 rounded-t-xl"
          style={{
            backgroundImage: `url(${TunaSalad})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="px-5 py-5 space-y-1 font-semibold">
          <h1 className="text-2xl">Missing</h1>
          <p className="text-lg">Garlics, Tomatoes</p>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
