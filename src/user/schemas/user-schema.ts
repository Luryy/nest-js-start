import { ApiProperty } from '@nestjs/swagger';
import { IUserDTO } from '../interfaces/IUserDTO';

export class UserSchema implements IUserDTO {
  @ApiProperty({
    description: 'The name of user',
    maxLength: 30,
    minLength: 5,
    default: 'Joe',
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'The email of user',
    required: false,
  })
  email?: string;
}
