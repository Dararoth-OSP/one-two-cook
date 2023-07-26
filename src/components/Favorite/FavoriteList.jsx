import React from "react";
import FavoriteListItems from "./FavoriteListItems";
import { FaTimes } from "react-icons/fa";

const FavoriteList = ({ favoriteItems, onClose }) => {
  return (
    <ul className="text-sm max-h-56 space-y-2 overflow-auto">
      <div className="flex justify-between items-center pr-2 border-b pb-1.5">
        Your Favorite <FaTimes onClick={onClose} className="w-5 h-5 text-zinc-400 hover:text-red-600"/>
      </div>
      {favoriteItems.map((item) => (
        <FavoriteListItems key={item.id} item={item} />
      ))}
      {favoriteItems.length === 0 && (
        <p className="text-center py-5">No Favorite founded!</p>
      )}
    </ul>
  );
};

export default FavoriteList;
