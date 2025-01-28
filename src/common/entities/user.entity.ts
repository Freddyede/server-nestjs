import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  username: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ type: 'json' })
  roles: { roles: string[] };
  @Column()
  lastName: string;
  @Column()
  firstName: string;
  @Column({ type: 'text' })
  avatar: string;
  @Column({ type: 'datetime', default: new Date(), nullable: false })
  @CreateDateColumn()
  created_at: Date;
}
