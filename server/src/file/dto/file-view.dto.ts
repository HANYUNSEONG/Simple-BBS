import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FileViewDto {
  @ApiProperty()
  @IsNotEmpty()
  path: string;
}
