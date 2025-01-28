// Nest import
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

// Entities
import { User } from './entities/user.entity';
import { Product } from './entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 3306,
      username: process.env.DB_USER || 'app',
      password: process.env.DB_PASSWORD || 'app',
      database: process.env.DB_NAME || 'nest_angular_dev',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([User, Product]),
    JwtModule.register({
      secret: 'secret',
      global: true,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  exports: [
    TypeOrmModule.forFeature([User, Product]),
    JwtModule.register({
      secret: 'secret',
      global: true,
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class CommonModule {}
