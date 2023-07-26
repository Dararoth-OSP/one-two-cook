import React, { useState, useRef, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import SearchMenu from "./SearchMenu";

const SearchBar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [enteredSearch, setEnteredSearch] = useState("");
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const searchMenuRef = useRef(null);

  const searchClickHandler = () => {
    setIsSearch(true);
  };

  const searchChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
    setShowSearchMenu(true);
    if (event.target.value === "") {
      setShowSearchMenu(false);
    }
  };

  const closeSearchHandler = () => {
    setIsSearch(false);
    setEnteredSearch("");
    setShowSearchMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowSearchMenu(false);
    };

    const handleDocumentClick = (event) => {
      // Check if the click occurred outside the SearchMenu component
      if (
        searchMenuRef.current &&
        !searchMenuRef.current.contains(event.target)
      ) {
        setShowSearchMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Add the event listener to the document when the SearchBar is active
    if (showSearchMenu) {
      document.addEventListener("click", handleDocumentClick);
    }

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [showSearchMenu]);

  return (
    <div className="relative z-50">
      <label
        htmlFor="search"
        onClick={searchClickHandler}
        className="absolute top-0.5 right-1 cursor-pointer bg-[#f56040] rounded-full"
      >
        <BiSearch
          className={`w-[36px] h-[36px] scale-105 duration-300 ${
            isSearch ? "p-2" : "text-white"
          }`}
        />
      </label>
      {isSearch && (
        <button
          onClick={closeSearchHandler}
          className="absolute top-2.5 right-12 text-[#f56040]"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      )}
      <input
        id="search"
        name="search"
        type="text"
        value={enteredSearch}
        onChange={searchChangeHandler}
        className={`duration-300 ${
          isSearch ? "w-80 pl-5 pr-20" : "w-11 invisible"
        } outline-orange-600 text-[#f56040]  rounded-full h-10`}
      ></input>
      {showSearchMenu && (
        <div ref={searchMenuRef} className="absolute top-12">
          <SearchMenu
            search={enteredSearch}
            itemClick={() => setShowSearchMenu(false)}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
