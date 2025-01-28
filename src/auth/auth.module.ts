import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from '../common/repositories/user.repository';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
})
export class AuthModule {}
