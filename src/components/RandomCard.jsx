import React, { Fragment, useState, useEffect } from "react";
import LoadingSpinner from "./UI/LoadingSpinner";
import { Link } from "react-router-dom";
import LogoLoading from "../components/UI/LogoLoading";


const RandomCard = ({ data, isLoading }) => {
  return (
    <Link to={`${data.id}`}>
      <div
        className={`${
          data.length === 0 && "hidden"
        }  ${!isLoading ? 'scale-95' : 'scale-100'} duration-500 max-w-[650px] relative h-[400px] mx-4 md:mx-auto rounded-[30px]`}
        style={{
          backgroundImage: `url(${data.imgURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`${
            data.length === 0 && "hidden"
          } absolute w-full space-y-2 h-1/3 flex flex-col justify-end py-5 bg-gradient-to-t from-black  rounded-b-3xl bottom-0 text-white px-5`}
        >
          <h1 className=" text-2xl font-bold">{data.title}</h1>
          <p className="line-clamp-1 overflow-hidden">{data.description}</p>
        </div>
        {isLoading && (
          <div className="absolute bg-white/50 rounded-3xl w-full h-full flex justify-center items-center">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </Link>
  );
};

export default RandomCard;
