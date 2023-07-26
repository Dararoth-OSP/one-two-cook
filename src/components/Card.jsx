import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./Favorite/FavoriteButton";

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-xl border border-zinc-300 hover:shadow-2xl hover:scale-105 duration-200 bg-white"
    >
      <Link to={`${props.id}`}>
        <div
          className="w-full h-[330px] rounded-t-xl"
          style={{
            backgroundImage: `url(${props.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {isHovered && (
          <div className="absolute top-0 right-0 w-full h-[330px] bg-gradient-to-bl from-white/50 from-10% to-transparent to-25% rounded-t-xl"></div>
        )}
        <div className="px-5 py-3 space-y-3 ">
          <h1 className="text-2xl font-bold line-clamp-1">{props.title}</h1>
          <p className="text-base line-clamp-2 overflow-hidden">
            {props.description}
          </p>
        </div>
        <div className="flex px-5 pb-3 pt-2 justify-between items-center text-base">
          <span className="text-zinc-400 text-sm">{props.difficulty}</span>
          <span className="font-medium">{props.prepTime} Mins</span>
        </div>
      </Link>
      <FavoriteButton favData={props}/>
    </li>
  );
};

export default Card;
