import { Injectable } from '@nestjs/common';
import { FileUploadDto } from './dto/file-upload.dto';

@Injectable()
export class FileService {
  uploadFile(file: Express.Multer.File): FileUploadDto {
    const { originalname, path } = file;
    const response: FileUploadDto = {
      path: `/${path}`,
      originalFileName: originalname,
    };

    return response;
  }
}
