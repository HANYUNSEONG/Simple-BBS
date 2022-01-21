import { timestamp } from 'rxjs';
import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BoardStatus } from './board-status.enum';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;

  @CreateDateColumn()
  createdDate: Date;

  @ManyToOne(() => User, (user) => user.boards, { eager: false })
  user: User;
}
