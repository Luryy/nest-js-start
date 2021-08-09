import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { IUserDTO } from '../interfaces/IUserDTO';

export class UserSchema implements IUserDTO {
  @ApiProperty({
    description: 'The name of user',
    maxLength: 30,
    minLength: 5,
    default: 'Joe',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The email of user',
    required: false,
  })
  @IsString()
  email?: string;
}
