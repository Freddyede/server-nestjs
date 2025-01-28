import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class UserRepository extends Repository<User> {
  constructor(@InjectRepository(User) userRepository: Repository<User>) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }
  async findExcept(user: User): Promise<User[]> {
    return this.createQueryBuilder('u')
      .where('u.email != :email', { email: user.email })
      .getMany();
  }
}
