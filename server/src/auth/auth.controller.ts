import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
  Request,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';
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
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
    @Res() response: Response,
  ): Promise<any> {
    return this.authService.signIn(authCredentialsDto, response);
  }

  @UseGuards(AuthGuard())
  @Get('/me')
  @ApiOperation({
    summary: '내 정보 API',
    description: '내 정보를 가져온다.',
  })
  getProfile(@Request() req) {
    // console.log(req);
    return req.user;
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User): void {
    console.log(`user`, user);
  }
}
