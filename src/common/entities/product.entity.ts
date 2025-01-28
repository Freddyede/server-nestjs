import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column({ type: 'float', nullable: true })
  price: number;
  @Column({ type: 'datetime', nullable: false })
  @CreateDateColumn()
  created_at: Date;
}
