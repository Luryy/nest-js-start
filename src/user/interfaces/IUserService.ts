import { IUserDTO } from './IUserDTO';

export interface IUserService {
  createUser(user: IUserDTO): IUserDTO;
}
