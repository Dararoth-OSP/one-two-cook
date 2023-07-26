import React, { useState, useEffect, useRef } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import FavoriteList from "./FavoriteList";
import { useSelector } from "react-redux";

const FavoriteMenu = () => {
  const [showFavList, setShowFavList] = useState(false);
  const favoriteRef = useRef(null);

  const favItems = useSelector((state) => state.favorite.items);

  const favButtonClickHandler = () => {
    setShowFavList((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowFavList(false);
    };

    const handleDocumentClick = (event) => {
      // Check if the click occurred outside the SearchMenu component
      if (favoriteRef.current && !favoriteRef.current.contains(event.target)) {
        setShowFavList(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [showFavList]);

  return (
    <div ref={favoriteRef} className="">
      <MdFavoriteBorder onClick={favButtonClickHandler} className="w-10 h-10" />
      {showFavList && (
        <div className="w-auto sm:w-[270px] absolute top-[60px] ml-2 right-2 lg:right-0 shadow-lg bg-white text-black rounded-lg p-2">
          <FavoriteList
            favoriteItems={favItems}
            onClose={() => setShowFavList(false)}
          />
        </div>
      )}
    </div>
  );
};

export default FavoriteMenu;
