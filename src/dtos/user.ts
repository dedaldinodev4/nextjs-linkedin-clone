import { IBase } from "./base";

export interface IUser  extends IBase,  IUserRequest {
  status: boolean;
  since: string | null;
  avatar: string | null;
}

export interface IUserRequest {
  name: string;
  email: string;
  description: string;
}
