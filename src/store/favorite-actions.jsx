import { favoriteActions } from "./favorite-slice";

export const fetchFavData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://one-two-cook-default-rtdb.asia-southeast1.firebasedatabase.app/favorite.json/"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const favData = await fetchData();
      dispatch(
        favoriteActions.replaceFavItems({
            items: favData.items || [],
        })
      );
    } catch (error) {}
  };
};

export const sendFavData = (fav) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://one-two-cook-default-rtdb.asia-southeast1.firebasedatabase.app/favorite.json/",
        {
          method: "PUT",
          body: JSON.stringify({
            items: fav.items,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      throw new Error("Sending cart data failed.");
    }
  };
};
