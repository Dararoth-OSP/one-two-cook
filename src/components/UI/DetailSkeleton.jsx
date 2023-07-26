import React from "react";
import { GiMeal } from "react-icons/gi";

const DetailSkeleton = () => {
  return (
    <div className="max-w-[1150px] px-4 mx-auto relative my-14">
      <div
        role="status"
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 animate-pulse"
      >
        <div className="max-w-4xl flex justify-center items-center border relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[550px] rounded-[30px] bg-gray-300 dark:bg-gray-200">
          <GiMeal className="w-14 h-14 text-gray-200 dark:text-gray-300" />
        </div>
        <div className="w-full lg:mt-20">
          <div className="py-3 space-y-10 ">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-200 w-4/5 mb-4"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-3/5 mb-4"></div>
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-3/5 mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-3/5 mb-4"></div>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-4/6 mb-4"></div>
          </div>
          <div className="flex pb-3 pt-2 text-base">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-1/6 mb-4"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default DetailSkeleton;
