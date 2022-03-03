import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions";
import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorite: {
          ...state.favorite,

          jobs: [...state.favorite.jobs, action.payload],
        },
      };

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorite: {
          ...state.favorite,

          jobs: [
            ...state.favorite.jobs.slice(0, action.payload),
            ...state.favorite.jobs.slice(action.payload + 1),
          ],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
