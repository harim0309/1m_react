import { combineReducers } from "redux";
import api from "./api";
import result from "./result"

const rootReducer = combineReducers({
  api,result,
});

export default rootReducer;