import { GlobalErrorState } from "./global-error/global-error.types";
import { UserState } from "./user/user.types";

export interface AppState {
  user: UserState,
  globalError: GlobalErrorState,
};
