
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import favoriteReducer from "../reducer/favoriteReducer";

import jobsReducer from "../reducer/jobSearchreducer";
import thunk from "redux-thunk";

export const initialState = {
  favorite: {
    jobset: [],
  },
  job: {
    jobset: [],
  },
};
const aComposeFunctionThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const bigReducer = combineReducers({
  favorite: favoriteReducer,
  job: jobsReducer,
});
export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
