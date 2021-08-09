import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IUserDTO } from './interfaces/IUserDTO';
import { UserSchema } from './schemas/user-schema';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() user: UserSchema): IUserDTO {
    return this.userService.createUser(user);
  }
}
