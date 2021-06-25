import { combineReducers } from "redux";
import saveImageReducer from "./saveImageReducer";

const reducers = combineReducers({
  image: saveImageReducer,
});
export default reducers;
export type State = ReturnType<typeof reducers>;
