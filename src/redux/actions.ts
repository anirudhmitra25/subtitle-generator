import { ISubtitle } from "../types";
import { STORE_URL, UPDATE_SUBTITLES } from "./actionTypes";

export const storeURL = (url: string) => {
  return {
    type: STORE_URL,
    payload: url,
  };
};

export const updateSubtitles = (subtitles: Array<ISubtitle>) => {
  return {
    type: UPDATE_SUBTITLES,
    payload: subtitles,
  };
};
