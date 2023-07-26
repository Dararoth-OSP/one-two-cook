import { Link } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";

const SearchList = ({ searchResults, isLoading, itemClick }) => {
  const dispatch = useDispatch();

  const limitedResults = searchResults.slice(0, 3);

  dispatch(searchActions.storeSearchResult(searchResults));

  return (
    <ul className="text-sm space-y-2">
      {isLoading ? (
        // Display a loading spinner or a message if there are no search results
        <div className="flex justify-center ">
          <LoadingSpinner />
        </div>
      ) : (
        // Use map to loop through the searchResults array and display each item
        limitedResults.map((item) => (
          <li
            onClick={itemClick}
            key={item.id}
            className=" bg-zinc-100 rounded-md duration-75 hover:bg-zinc-200"
          >
            <Link to={`${item.type}s/${item.id}`}>
              <div className="grid grid-cols-3 rounded-md border-gray-700">
                <div
                  className="w-full h-[50px] relative rounded-md"
                  style={{
                    backgroundImage: `url(${item.imgURL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="w-10 h-full absolute right-0 bg-gradient-to-l from-black"></div>
                </div>
                <h6 className="font-bold pl-2 col-span-2 bg-black text-white flex items-center rounded-e-md">
                  {item.title}
                </h6>
              </div>
            </Link>
          </li>
        ))
      )}
      {/* Uncomment the code below if you want to add a "See More" link */}
      {searchResults.length === 0 && !isLoading && (
        <p className="text-center py-5">No Result Founded!</p>
      )}
      {searchResults.length > 3 && (
        <Link
          to="/one-two-cook/search-page"
          onClick={itemClick}
          className="py-3 bg-orange-50 duration-100 hover:bg-orange-100 rounded-md flex justify-center hover:underline text-orange-600 text-center"
        >
          See More
        </Link>
      )}
    </ul>
  );
};

export default SearchList;
