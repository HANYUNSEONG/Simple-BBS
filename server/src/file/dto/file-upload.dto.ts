import { ApiProperty } from '@nestjs/swagger';

export class FileUploadDto {
  @ApiProperty()
  path: string;

  @ApiProperty()
  originalFileName: string;
}
