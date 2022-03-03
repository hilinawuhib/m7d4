export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const GET_JOBS = "GET_JOBS";

export const addToFavoriteAction = (company) => ({
  type: ADD_TO_FAVORITE,
  payload: company,
});

export const removeFromFavoriteAction = (company) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: company,
});
export const fetchJobs = (query) => {
  return async (dispatch, getState) => {
    const stateRightNow = getState();
    try {
      const response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=" +
          query +
          "&limit=15"
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
