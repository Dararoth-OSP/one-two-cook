import React from "react";
import AmokImage from "../../assets/khmer-fish-amok.jpg";

const FeaturesRecipe = () => {
  return (
    <div className="space-y-4 ">
      <h1 className="text-4xl text-center lg:text-start font-bold">Features Recipe</h1>
      <div
        className="max-w-[500px] mx-auto h-[300px] relative"
        style={{
          backgroundImage: `url(${AmokImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <span className="absolute w-full bottom-0 bg-gradient-to-t from-black px-4 py-5 text-white">
          Amok, a royal Khmer dish dating back to the Khmer Empire.
        </span>
      </div>
    </div>
  );
};

export default FeaturesRecipe;
