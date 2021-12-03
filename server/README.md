# Simple BBS Server

## 1. nest 설치

```sh
> npm i -g @nestjs/cli
> nest new project-name
```

설치 후에 src 폴더를 보면 총 5개의 파일이 있다.

1. app.controller.ts
   - 단일 경로가 있는 기본 컨트롤러
2. app.controller.spec.ts
   - 컨트롤러에 대한 단위 테스트
3. app.module.ts
   - 애플리케이션의 루트 모듈
4. app.service.ts
   - 하나의 방법으로 기본 서비스를 제공
5. main.ts
   - 핵심 기능 NestFactory를 사용하여 Nest 애플리케이션 인스턴스를 생성하는 파일

### 1-1 플랫폼

Nest는 플랫폼에 구애받지 않는 프레임워크를 목표로 한다. 플랫폼 독립성을 통해 개발자가 여러 다른 유형의 애플리케이션에서 활용할 수 있는 재사용 가능한 논리적 부분을 생성할 수 있다.
기본적으로 지원되는 두 가지 HTTP 플랫폼이 있다.

1. platform-express
   - 노드용으로 잘 알려진 미니멀한 웹 프레임워크
2. platform-fastify
   - 최대 효율성과 속도 제공에 중점을 둔 고성능 및 낮은 오버헤드 프레임워크

### 1-2 애플리케이션 실행

설치를 완료하면 터미널에서 아래 명령어를 실행하여 애플리케이션을 시작할 수 있다.  
main.ts에 정의되어 있는 포트로 앱을 시작한다.

```sh
> npm run start
```

## 2. 컨트롤러

컨트롤러는 들어오는 요청을 처리하고 클라이언트에 응답을 반환하는 역할을 한다.  
컨트롤러의 목적은 애플리케이션에 대한 특정 요청을 수신하는 것이다.

기본 컨트롤러를 만들기 위해 클래스와 데코레이터를 사용하는데 데코레이터는 클래스를 필수 메타 데이터와 연결하고 Nest가 라우팅 맵을 생성할 수 있도록 한다. (요청을 해당 컨트롤러에 연결)

### 2-1 라우팅

기본 컨트롤러를 정의하는데 필요한 **@Controller()**를 사용한다.

@Controller 데코레이터에서 경로 접두사를 사용하면 관련 라우트 집합을 쉽게 그룹화하고 반복코드를 최소화할 수 있다.

예를 들어 /customers 라우트 아래에서 고객 엔터티와 상호작용을 관리하는 라우트 집합을 그룹화하도록 선택할 수 있다. 이 경우 @Controller() 데코레이터에서 경로 접두사 customers를 지정하여 파일의 각 라우트에 대해 반복해서 작성하지 않아도 된다.

```ts
import { Controller, Get } from '@nestjs/common';

@Controller('cats');
export class CatsController {
   @Get()
   findAll(): string {
      return 'This action returns all cats'
   }
}
```

> CLI를 사용하여 컨트롤러를 생성할 수 있다.
>
> ```sh
> > nest g controller cats
> ```

findAll() 메소드 앞에 있는 @Get() HTTP 요청 메서드 데코레이터는 Nest에게 HTTP 요청에 대한 특정 엔드포인트에 대한 핸들러를 작성하도록 지시합니다.  
엔드포인트는 HTTP 요청 메서드(이 경우 GET) 및 라우트 경로에 해당합니다.
