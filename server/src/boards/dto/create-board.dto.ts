import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { BoardStatus } from '../board-status.enum';

export class CreateBoardDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    enum: BoardStatus,
  })
  @IsEnum(BoardStatus)
  status: BoardStatus;
}
