import { ActionType } from "../action-types";
import { ACTION } from "../actions";
const initialState = "";
const saveImageReducer = (state: string = initialState, action: ACTION) => {
  switch (action.type) {
    case ActionType.SAVE_IMAGE:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export default saveImageReducer;
