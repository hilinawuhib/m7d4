import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import favoriteReducer from "../reducer/favoriteReducer";
import jobsReducer from "../reducer/jobSearchreducer";
import thunk from "redux-thunk";
const aComposeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favorite: {
    jobset: [],
  },
  job: {
    jobset: [],
  },
};

const bigReducer = combineReducers({
  favorite: favoriteReducer,
  job: jobsReducer,
});
export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
