import { UsersEntity } from "./users.entity";

export interface IUser extends Omit<UsersEntity, 'password'> {}
