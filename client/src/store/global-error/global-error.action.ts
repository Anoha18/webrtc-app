import { Dispatch } from "redux"
import { GlobalErrorTypes } from "./global-error.types"

export const setGlobalErrorMessage = (message: string) => (dispatch: Dispatch) => {
  return dispatch({
    type: GlobalErrorTypes.SET_MESSAGE,
    message,
  });
}