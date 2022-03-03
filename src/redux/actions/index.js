export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

export const addToFavoriteAction = (company) => ({
  type: ADD_TO_FAVORITE,
  payload: company,
});

export const removeFromFavoriteAction = (company) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: company,
});
