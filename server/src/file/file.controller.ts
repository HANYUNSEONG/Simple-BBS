import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileViewDto } from './dto/file-view.dto';
import { FileService } from './file.service';

@Controller('file')
@UseGuards(AuthGuard())
@ApiTags('File API')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post('/upload')
  @ApiOperation({
    summary: '파일 업로드 API',
    description: '파일 업로드를 한다.',
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.uploadFile(file);
  }

  @Get('/view')
  @ApiOperation({
    summary: '파일 View API',
    description: '파일 View',
  })
  viewFile(@Body() fileViewDto: FileViewDto) {
    console.log(fileViewDto);
  }
}
