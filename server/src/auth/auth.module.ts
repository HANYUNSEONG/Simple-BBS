import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: 'SimpleBBS-SECRET',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],

  // JwtStrategy를 Auth 모듈에서 사용할 수 있게 등록
  providers: [AuthService, JwtStrategy],

  // JwtStrategy, PassportModule를 다른 모듈에서 사용할 수 있도록 등록
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
