import { Action, Dispatch } from "redux";
import api from "../../api";
import { AppState } from "../types";
import { LoginParams, UserTypes } from "./user.types";

export const login = ({ login, password }: LoginParams) => async (dispath: Dispatch, state: AppState): Promise<Action> => {
  dispath({ type: UserTypes.LOGIN_STARTED });
  try {
    const result = await api.post('/auth/signin', {
      login,
      password,
    });

    if (result.status !== 200 && !result.data.success) {
      return dispath({
        type: UserTypes.LOGIN_FAILED,
        error: result.data.error || 'Undefined error'
      });
    }

    const {
      user,
      accessToken,
      refreshToken
    } = result.data.data || {};
    dispath({
      type: UserTypes.LOGIN_SUCCESS,
      user,
    });
    dispath({
      type: UserTypes.SET_ACCESS_TOKEN,
      accessToken,
    });
    return dispath({
      type: UserTypes.SET_REFRESH_TOKEN,
      refreshToken,
    });
  } catch (error) {
    console.error('User. Login(). Error: ', error.message);
    return dispath({
      type: UserTypes.LOGIN_FAILED,
      error: error.message
    });
  }
}
