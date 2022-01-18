import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import photoReducer from "./photo/photoReducer";

const rootReducer = combineReducers({
  photo: photoReducer,
});
// const composeEnhancer =
//   (window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()) ||
//   compose;
// const enhancers = [composeEnhancer, applyMiddleware(thunk)];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
