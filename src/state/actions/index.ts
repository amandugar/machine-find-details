import { ActionType } from "../action-types";

interface SaveImage {
  type: ActionType.SAVE_IMAGE;
  payload: string;
}
export type ACTION = SaveImage;
