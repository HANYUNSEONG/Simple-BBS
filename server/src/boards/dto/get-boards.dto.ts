import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { User } from 'src/auth/user.entity';
import { BoardStatus } from '../board-status.enum';

export class GetBoardsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({
    enum: BoardStatus,
  })
  @IsEnum(BoardStatus)
  status: BoardStatus;

  @ApiProperty()
  user: User;
}
