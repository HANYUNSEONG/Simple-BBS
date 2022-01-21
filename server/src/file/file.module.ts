import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { FileController } from './file.controller';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';
import { AuthModule } from 'src/auth/auth.module';
import { FileService } from './file.service';

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        storage: diskStorage({
          destination: (req, file, cb) => {
            // 파일 저장 위치 설정
            const username = (req.res.req.user as any).username;
            const dest = `${configService.get('FILE_PATH')}/${username}`;

            // 경로에 폴더가 없으면 생성한다.
            if (!existsSync(dest)) {
              mkdirSync(dest, { recursive: true });
            }

            cb(null, dest);
          },
          filename: (req, file, cb) => {
            // 파일 이름이 겹치지 않도록 파일 이름을 바꾼다.
            // TODO : file.originalname 한글일 경우 깨지는 오류 수정하기
            const newFileName = Date.now() + '-' + file.originalname;
            cb(null, newFileName);
          },
        }),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
