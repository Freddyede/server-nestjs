import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../common/repositories/user.repository';
import { User } from '../common/entities/user.entity';
import { Request } from 'express';
import { ProductRepository } from '../common/repositories/product.repository';
import { Product } from '../common/entities/product.entity';

@Injectable()
export class AdminService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly productRepository: ProductRepository,
  ) {}

  async all(
    req: Request,
  ): Promise<{ data: { users: User[]; product: Product[] }; status: number }> {
    if (req['user']) {
      return {
        data: {
          users: await this.userRepository.findExcept(req['user']),
          product: await this.productRepository.find(),
        },
        status: HttpStatus.OK,
      };
    } else {
      throw new UnauthorizedException('Vous devez être authentifiez avant');
    }
  }
}
