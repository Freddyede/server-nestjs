import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class ProductRepository extends Repository<Product> {
  constructor(
    @InjectRepository(Product) productRepository: Repository<Product>,
  ) {
    super(
      productRepository.target,
      productRepository.manager,
      productRepository.queryRunner,
    );
  }
}
