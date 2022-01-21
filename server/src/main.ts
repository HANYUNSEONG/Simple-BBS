import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const PORT = 4000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // cors setting
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: 'GET,PUT,PATCH,POST,DELETE,HEAD',
    preflightContinue: false,
    credentials: true,
  });
  app.use(cookieParser());

  // static file setting
  app.useStaticAssets(join(__dirname, '../images'), { prefix: '/images' });

  // swagger setting
  const config = new DocumentBuilder()
    .setTitle('Simple BBS')
    .setDescription('The Simple BBS API description')
    .setVersion('0.1')
    .addTag('BBS')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // port setting
  await app.listen(PORT);
}
bootstrap();
