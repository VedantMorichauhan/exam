import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { User } from "./reduce/User";

let combine = combineReducers({
  user: User,

});

export const Store = legacy_createStore(combine, applyMiddleware(thunk));