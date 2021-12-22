import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto);
  }

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
    response: Response,
  ): Promise<any> {
    const { username, password } = authCredentialsDto;
    const user = await this.userRepository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성 (Secret + Payload가 필요)
      const payload = {
        username,
      };
      const accessToken = this.jwtService.sign(payload);

      response
        .cookie('access_token', accessToken, {
          httpOnly: true,
          path: '/',
          // domain: 'http://localhost:3000',
          expires: new Date(Date.now() + 1000 * 60 * 68 * 24),
        })
        .send({
          success: true,
        });

      // return {
      //   success: true,
      // };
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}
