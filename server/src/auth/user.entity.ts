import { Exclude } from 'class-transformer';
import { Board } from 'src/boards/board.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
// Unique를 주어 username이 겹치지 않도록 방지 배열이기 때문에 여러 컬럼을 줄 수 있음
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Board, (board) => board.user, { eager: true })
  boards: Board[];

  @Column({ nullable: true })
  @Exclude()
  refreshToken?: string;
}
