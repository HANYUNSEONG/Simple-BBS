import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
  Request,
  Res,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';
import { JwtRefreshGuard } from './jwt-refresh.guard';
import { Response } from 'express';

@Controller('auth')
@ApiTags('Auth API')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @ApiOperation({
    summary: '회원가입 API',
    description: '회원가입을 한다.',
  })
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  @ApiOperation({
    summary: '로그인 API',
    description: '로그인을 한다',
  })
  async signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<object> {
    const { username } = authCredentialsDto;
    const { accessToken, ...accessOption } =
      this.authService.getCookieWithJwtAccessToken(username);
    const { refreshToken, ...refreshOption } =
      this.authService.getCookieWithJwtRefreshToken(username);

    await this.authService.setRefreshToken(refreshToken, username);
    res.cookie('AccessToken', accessToken, accessOption);
    res.cookie('RefreshToken', refreshToken, refreshOption);

    return this.authService.signIn(authCredentialsDto);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('/logout')
  @ApiOperation({
    summary: '로그아웃 API',
    description: '로그아웃을 한다.',
  })
  async logout(@Req() req, @Res({ passthrough: true }) res: Response) {
    const { accessOption, refreshOption } =
      this.authService.getCookieForLogOut();

    await this.authService.removeRefreshToken(req.user.name);

    res.cookie('AccessToken', '', accessOption);
    res.cookie('RefreshToken', '', refreshOption);

    return 'success';
  }

  @UseGuards(AuthGuard())
  @Get('/me')
  @ApiOperation({
    summary: '내 정보 API',
    description: '내 정보를 가져온다.',
  })
  getProfile(@Request() req) {
    delete req.user.boards;
    return req.user;
  }

  @UseGuards(JwtRefreshGuard)
  @Get('/refresh')
  refreshToken(@Req() req, @Res({ passthrough: true }) res: Response) {
    const user = req.user;
    const { accessToken, ...accessOption } =
      this.authService.getCookieWithJwtAccessToken(user.username);

    res.cookie('AccessToken', accessToken, accessOption);
    return user;
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User): void {
    console.log(`user`, user);
  }
}
