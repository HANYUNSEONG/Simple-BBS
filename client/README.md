# Simple BBS Client

## Next.js 설치

```sh
> npx create-next-app client --typescript
```

## 스타일링 라이브러리 설치

```sh
> yarn add @emotion/react @emotion/styled
```

## React Query 설치

```sh
> yarn add react-query
```

- \_app.tsx 수정

  ```ts
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {!isProd && <ReactQueryDevtools />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>;
  )
  ```

## Recoil 설치

```sh
> yarn add recoil
```

- \_app.tsx에 RecoilRoot 추가
