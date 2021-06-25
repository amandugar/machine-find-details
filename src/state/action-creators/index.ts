import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { ACTION } from "../actions";

export const saveImage = (image: string) => {
  return (dispatch: Dispatch<ACTION>) => {
    dispatch({
      type: ActionType.SAVE_IMAGE,
      payload: image,
    });
  };
};
