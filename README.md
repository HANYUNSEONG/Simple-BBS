# Simple BBS

공부하며 간단한 게시판을 만들었습니다.

## 공통

- Typescript

## Client

- NextJS
- Emotion
- Recoil
- React Query
- Toast UI Editor

## Server

- NestJS
- TypeORM
- PostgreSQL

## 기능

### 계정

- 로그인/로그아웃
- 회원가입

### 게시판

- 게시글 쓰기
  - 이미지 업로드
  - Markdown Editor 사용
  - 공개/비공개 선택
- 게시글 읽기
  - Toast UI Editor에서 제공하는 Viewer 사용
- 게시글 리스트
  - 무한 스크롤링 구현
- 게시글 삭제

## 느낀 점

**Client**

- Next.js 동작에 대해 이해를 높였다.
- React Query를 사용함으로 네트워크 비용을 줄이는 방법을 알았다.
- Recoil를 사용하여 Global state를 관리할 수 있게 되었다.
- Context api를 사용해서 AuthProvider를 만들어 권한 관련 처리를 하는 방법을 배웠다.
- Toast UI Editor 사용 시 SSR을 지원 안 해주는 점을 Next.js에 dynamic import로 처리했다.
- Intersection Observer를 사용한 무한 스크롤링을 구현할 수 있게 되었고 Custom hooks로 만들어 사용하는 방법을 알았다.

**Server**

- Nest.js의 기초를 다졌다.
- TypeORM를 사용한 CRUD를 구성할 수 있게 되었다.
- JWT를 이용한 로그인 처리를 했다.
