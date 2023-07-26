import React, { useState, useCallback, useEffect } from "react";
import SearchList from "./SearchList";
import { useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";

const SearchMenu = ({ search, itemClick }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  dispatch(searchActions.getSearchInput(search));

  const fetchSearchHandler = useCallback(
    async function () {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://one-two-cook-default-rtdb.asia-southeast1.firebasedatabase.app/recipe.json/"
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();

        const loadedSearchResults = [];

        for (const key in data) {
          if (data[key].title.toLowerCase().includes(search)) {
            loadedSearchResults.push({
              id: key,
              title: data[key].title,
              calories: data[key].calories,
              description: data[key].description,
              difficulty: data[key].difficulty,
              imgURL: data[key].imgURL,
              ingredient: data[key].ingredient,
              instruction: data[key].instruction,
              kitWare: data[key].kitWare,
              origin: data[key].origin,
              prepTime: data[key].prepTime,
              type: data[key].type,
              notice: data[key].notice,
            });
          }
        }

        setSearchResults(loadedSearchResults);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [search]
  );

  useEffect(() => {
    fetchSearchHandler();
  }, [fetchSearchHandler]);

  return (
    <div className="w-80 shadow-lg bg-white text-black rounded-lg p-2">
      <SearchList
        searchResults={searchResults}
        isLoading={isLoading}
        itemClick={itemClick}
      />
    </div>
  );
};

export default SearchMenu;
