import { initialState } from "../store";
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions";

const favoriteReducer = (state = initialState.favorite, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,

        jobset: [...state.jobset, action.payload],
      };

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,

        jobset: [
          ...state.jobset.slice(0, action.payload),
          ...state.jobset.slice(action.payload + 1),
        ],
      };

    default:
      return state;
  }
};

export default favoriteReducer;
