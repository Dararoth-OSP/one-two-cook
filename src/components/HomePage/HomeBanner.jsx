import React from "react";
import { BiSearch } from "react-icons/bi";

const HomeBanner = () => {
  return (
    <div
      className="h-[300px] text-white"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 pt-8 xl:pt-16 px-4">
        <div className="space-y-5 sm:space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold">Discover Recipes</h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl line-clamp-2">
            Find the most recent and popular recipes all over the world from our
            extensive collections.
          </p>
        </div>
        <div className="relative mt-3 xl:ml-20">
          <input
            className="bg-white/80 w-full py-3 px-8 text-2xl focus:outline-none text-black"
            type="text"
            placeholder="Search Recipe"
          />
          <button className="absolute border-l-2 border-gray-500 top-0 right-0 p-2">
            <BiSearch className="text-gray-700 w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
