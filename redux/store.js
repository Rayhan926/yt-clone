import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import { homeVideoReducer, searchVideoReducer } from "./reducers/video.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideoReducer,
  searchVideos: searchVideoReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
