import { createStore } from "redux";
import mainReducer from "../reducer";

export const initialState = {
 favorite: {
    jobs: [],
  },
};

export const configureStore = createStore(
   mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
