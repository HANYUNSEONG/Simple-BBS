import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      // jwt secret key
      secretOrKey: 'SimpleBBS-SECRET',

      // jwt type
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) => {
          console.log(request?.cookies['access_token']);
          return request?.cookies['access_token'];
        },
      ]),
    });
  }

  async validate(payload) {
    const { username } = payload;
    const user: User = await this.userRepository.findOne({ username });

    if (!user) {
      throw new UnauthorizedException();
    }

    delete user.password;

    return user;
  }
}
