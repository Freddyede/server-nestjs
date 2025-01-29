import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../../common/repositories/user.repository';
import { Request } from 'express';

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
}
