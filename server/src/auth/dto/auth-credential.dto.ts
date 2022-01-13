import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @ApiProperty()
  @IsString()
  @MinLength(4, {
    message: '아이디는 최소 4자 이상입니다.',
  })
  @MaxLength(20, {
    message: '아이디는 최대 20자까지 입니다.',
  })
  username: string;

  @ApiProperty()
  @IsString()
  @MinLength(4, {
    message: '비밀번호는 최소 4자 이상입니다.',
  })
  @MaxLength(20, {
    message: '비밀번호는 최대 20자까지 입니다.',
  })
  // 영어랑 숫자만 가능한 유효성 체크
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: '비밀번호는 영어와 숫자 조합만 사용 가능합니다.',
  })
  password: string;
}
