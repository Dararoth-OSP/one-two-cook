import React from "react";
import PorkBellyIMG from "../../../assets/pork-belly.jpg";

const MealsLists = () => {
  return (
    <div className="flex justify-center border-b border-gray-700">
      <div className="w-[450px] h-[150px] relative"
        style={{
          backgroundImage: `url(${PorkBellyIMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ><div className="w-20 h-full absolute right-0 bg-gradient-to-l from-black"></div></div>
      <div className="bg-black text-white px-4 py-6 space-y-3 ">
        <h6 className="text-xl font-bold line-clamp-1">Braised Pork Belly with Eggs</h6>
        <p className="text-sm line-clamp-2">
          An unforgettable, sweet and savory dish. Pork belly braised in a dark
          thin flavorful broth.
        </p>
      </div>
    </div>
  );
};

export default MealsLists;
