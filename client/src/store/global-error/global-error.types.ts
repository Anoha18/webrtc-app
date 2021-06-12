export interface GlobalErrorState {
  message: string | null,
}

export enum GlobalErrorTypes {
  SET_MESSAGE = '@@globalError/SET_MESSAGE',
}