import {
  Body,
  HttpStatus,
  Injectable,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from '../../common/repositories/user.repository';
import { Request } from 'express';
import { UserDto } from '../../common/dto/user.dto';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async all(req: Request) {
    if (req['user']) {
      return {
        data: await this.userRepository.findExcept(req['user']),
        status: HttpStatus.OK,
      };
    } else {
      throw new UnauthorizedException({
        message: "You couldn't get this resource",
        status: HttpStatus.UNAUTHORIZED,
      });
    }
  }
  async created(@Body() user: UserDto, @Req() req: Request) {
    if (req['user']) {
      const salt: string = await genSalt(10);
      user.password = await hash(user.password, salt);
      user.username = null;
      user.roles = { roles: ['ROLE_COMPANY'] };
      await this.userRepository.save(user);
      return {
        message: 'User created successfully',
        status: HttpStatus.CREATED,
      };
    } else {
      throw new UnauthorizedException({
        message: "You couldn't get this resource",
        status: HttpStatus.UNAUTHORIZED,
      });
    }
  }
}
