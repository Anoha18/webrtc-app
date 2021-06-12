import { Reducer } from "redux";
import { UserState, UserTypes } from "./user.types";

const initState: UserState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  login: {
    loading: false,
    error: null
  }
}

const userReducer: Reducer<UserState> = (state = initState, action) => {
  switch (action.type) {
    case UserTypes.LOGIN_STARTED:
      return {
        ...state,
        login: {
          loading: true,
          error: null,
        }
      }
    case UserTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        login: {
          loading: false,
          error: null
        }
      }
    case UserTypes.LOGIN_FAILED:
      return {
        ...state,
        login: {
          loading: false,
          error: action.error,
        }
      }
    case UserTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      }
    case UserTypes.SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.refreshToken,
      }
    default:
      return state;
  }
}

export default userReducer;

