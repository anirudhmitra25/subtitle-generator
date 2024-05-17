import { STORE_URL, UPDATE_SUBTITLES } from "./actionTypes";

const initialState = {
  url: "",
  subtitles: [
    {
      startTime: "00:00:00",
      endTime: "00:00:00",
      content: "",
    },
  ],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case STORE_URL:
      return {
        ...state,
        url: action.payload,
      };
    case UPDATE_SUBTITLES:
      return {
        ...state,
        subtitles: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
