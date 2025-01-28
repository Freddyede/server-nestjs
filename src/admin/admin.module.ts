import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { UserRepository } from '../common/repositories/user.repository';
import { CommonModule } from '../common/common.module';
import { ProductRepository } from '../common/repositories/product.repository';

@Module({
  imports: [CommonModule],
  controllers: [AdminController],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    AdminService,
    UserRepository,
    ProductRepository,
  ],
})
export class AdminModule {}
