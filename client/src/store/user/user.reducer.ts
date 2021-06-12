import { Reducer } from "redux";
import { UserState } from "./user.types";

const initState: UserState = {
  user: null,
  accessToken: null,
  refreshToken: null,
}

const userReducer: Reducer<UserState> = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default userReducer;

