import { Reducer } from "redux";
import { GlobalErrorState, GlobalErrorTypes } from "./global-error.types";

const initState: GlobalErrorState = {
  message: null,
}

const globalErrorReducer: Reducer<GlobalErrorState> = (state = initState, action) => {
  switch (action.type) {
    case GlobalErrorTypes.SET_MESSAGE:
      return {
        message: action.message
      }
    default:
      return state;
  }
}

export default globalErrorReducer;
