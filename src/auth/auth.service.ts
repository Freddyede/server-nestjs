import { Injectable } from '@nestjs/common';
import { UserRepository } from '../common/repositories/user.repository';
import { JwtService } from '@nestjs/jwt';
import { User } from '../common/entities/user.entity';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: any) {
    const userData: User = await this.userRepository.findOneOrFail({
      where: { email: user.email },
    });
    if (await compare(user.password, userData.password)) {
      return {
        user: { ...userData },
        token: this.jwtService.sign({ ...userData }, { expiresIn: '1h' }),
      };
    }
  }
}
