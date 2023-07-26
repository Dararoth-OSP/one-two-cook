import React from "react";
import { Link } from "react-router-dom";
import RemoveButton from "../UI/RemoveButton";
import { useDispatch } from "react-redux";
import { favoriteActions } from "../../store/favorite-slice";

const FavoriteListItems = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromFavHandler = () => {
    dispatch(favoriteActions.removeItemFromFav(item.id));
  };

  return (
    <li
      key={item.id}
      className=" bg-zinc-100 group/favorite relative rounded-md duration-75 hover:bg-zinc-200"
    >
      <Link to={`${item.type}s/${item.id}`}>
        <div className="grid grid-cols-3 rounded-md border-gray-700">
          <div
            className="w-full h-[50px] relative rounded-s-md"
            style={{
              backgroundImage: `url(${item.img || item.imgURL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-10 h-full absolute right-0 bg-gradient-to-l from-zinc-100 to-transparent to-50%"></div>
          </div>
          <div className="pl-2 pr-11 font-bold bg-zinc-100 text-black flex items-center rounded-e-md col-span-2">
            <h6 className=" line-clamp-2 ">{item.title}</h6>
          </div>
        </div>
      </Link>
      <div
        onClick={removeFromFavHandler}
        className="absolute right-0.5 group-hover/favorite:visible invisible top-2.5 w-10 h-10"
      >
        <RemoveButton />
      </div>
    </li>
  );
};

export default FavoriteListItems;
