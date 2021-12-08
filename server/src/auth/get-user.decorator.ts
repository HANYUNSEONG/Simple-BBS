import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

// 커스텀 데코레이터 GetUser를 만들어서 request 데이터에서 User만 리턴함
export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();

    return req.user;
  },
);
