import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsStrongPassword,
} from 'class-validator';

export class UserDto {
  @IsEmail()
  email: string;
  @IsStrongPassword({
    minLowercase: 2,
    minUppercase: 2,
    minNumbers: 2,
    minSymbols: 2,
    minLength: 8,
  })
  password: string;
  @IsEmpty()
  roles?: { roles: string[] };
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  avatar: string;
  @IsEmpty()
  created_at?: Date;
}
