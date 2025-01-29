import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CommonModule } from '../../common/common.module';
import { UserRepository } from '../../common/repositories/user.repository';

@Module({
  imports: [CommonModule],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
})
export class UsersModule {}
