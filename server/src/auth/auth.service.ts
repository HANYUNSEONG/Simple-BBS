import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<object> {
    const { username, password } = authCredentialsDto;
    const user = await this.userRepository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      return {
        user: {
          id: user.id,
          username,
        },
      };
    } else {
      throw new UnauthorizedException('login failed');
    }
  }

  getCookieWithJwtAccessToken(username: string) {
    const payload = { username };
    const expiresTime = 1000 * 60 * 15; // 15분
    // const expiresTime = 1000 * 10;   // 10초 (테스트용)

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET'),
      expiresIn: expiresTime,
    });

    return {
      accessToken,
      path: '/',
      httpOnly: true,
      maxAge: expiresTime,
    };
  }

  getCookieWithJwtRefreshToken(username: string) {
    const payload = { username };

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn: 1000 * 60 * 60 * 24 * 7,
    });

    return {
      refreshToken,
      path: '/',
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
    };
  }

  getCookieForLogOut() {
    return {
      accessOption: {
        path: '/',
        httpOnly: true,
      },
      refreshOption: {
        path: '/',
        httpOnly: true,
      },
    };
  }

  // 리프레쉬 토큰 저장
  async setRefreshToken(refreshToken: string, username: string) {
    const currentRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.userRepository.update(
      { username },
      {
        refreshToken: currentRefreshToken,
      },
    );
  }

  // 리프레쉬가 유효한지 확인하고 매칭되는 유저는 유저 정보를 반환한다.
  async getUseRefreshTokenMatch(refreshToken: string, username: string) {
    const user = await this.userRepository.findOne({ username });

    const refreshTokenMatching = await bcrypt.compare(
      refreshToken,
      user.refreshToken,
    );

    if (refreshTokenMatching) {
      return user;
    }
  }

  // 로그아웃 할 때 사용한다.
  async removeRefreshToken(username: string) {
    return this.userRepository.update(
      { username },
      {
        refreshToken: null,
      },
    );
  }
}
