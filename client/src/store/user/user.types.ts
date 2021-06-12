export enum UserTypes {

}

export interface User {
  readonly id: number,
  readonly firstname: string,
  readonly lastname: string,
  readonly login: string,
  readonly createdAt: string,
  readonly updatedAt: string
}

export interface UserState {
  readonly user: User | null,
  readonly accessToken: string | null,
  readonly refreshToken: string | null
}

export interface LoginParams {
  login: string,
  password: string
}