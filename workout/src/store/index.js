import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
/* REDUCERS */
import rootReducer from "./reducers";
import { SET_LOGIN } from "./types";

let loggerMiddleware = createLogger({});

let createStoreWithMiddleware = applyMiddleware(
  thunk,
  loggerMiddleware
)(createStore);

let store = createStoreWithMiddleware(rootReducer);

export default store;
