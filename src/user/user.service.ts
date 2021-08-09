import { Injectable } from '@nestjs/common';
import { IUserDTO } from './interfaces/IUserDTO';
import { IUserService } from './interfaces/IUserService';

@Injectable()
export class UserService implements IUserService {
  createUser(user: IUserDTO): IUserDTO {
    return user;
  }
}
