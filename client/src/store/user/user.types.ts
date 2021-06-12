export enum UserTypes {
  LOGIN_STARTED = '@@user/LOGIN_STARTED',
  LOGIN_SUCCESS = '@@user/LOGIN_SUCCESS',
  LOGIN_FAILED = '@@user/LOGIN_FAILED',
  SET_ACCESS_TOKEN = '@@user/SET_ACCESS_TOKEN',
  SET_REFRESH_TOKEN = '@@user/SET_REFRESH_TOKEN',
}

export interface UserState {
  readonly user: User | null,
  readonly accessToken: string | null,
  readonly refreshToken: string | null,
  readonly login: LoginState
}

export interface User {
  readonly id: number,
  readonly firstname: string,
  readonly lastname: string,
  readonly login: string,
  readonly createdAt: string,
  readonly updatedAt: string
}

export interface LoginState {
  readonly loading: boolean,
  readonly error: string | null,
}

export interface LoginParams {
  login: string,
  password: string
}