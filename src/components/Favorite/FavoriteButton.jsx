import React from "react";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { favoriteActions } from "../../store/favorite-slice";

const FavoriteButton = ({ favData }) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.items);

  const idArray = favorite.map((item) => item.id);
  const isFavorite = idArray.includes(favData.id);

  const addToFavHandler = () => {
    dispatch(favoriteActions.addItemToFav(favData));
  };

  const removeFromFavHandler = () => {
    dispatch(favoriteActions.removeItemFromFav(favData.id));
  };

  const favoriteHandler = () => {
    if (isFavorite) {
      removeFromFavHandler();
    } else {
      addToFavHandler();
    }
  };

  return (
    <button
      onClick={favoriteHandler}
      className="absolute top-3 right-3 border border-zinc-300/70 text-red-600/75 hover:shadow-xl hover:text-red-600 bg-white/40 p-2 hover:scale-110 duration-200 rounded-full"
    >
      {isFavorite ? (
        <MdFavorite className="w-6 h-6" />
      ) : (
        <MdOutlineFavoriteBorder className="w-6 h-6" />
      )}
    </button>
  );
};

export default FavoriteButton;
