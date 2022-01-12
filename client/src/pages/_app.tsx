import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

import Layout from "@/components/Layout";
import theme from "@/theme";
import { RecoilRoot } from "recoil";
import Toast from "@/components/common/Toast";
import AuthProvider from "@/components/AuthProvider";
import { getUser } from "@/components/AuthProvider/AuthProvider";
import App from "next/app";
import Router from "next/router";

function SimpleBBS({ Component, pageProps }: AppProps) {
  const isProd = process.env.NODE_ENV === "production";
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          {!isProd && <ReactQueryDevtools />}
          <AuthProvider authData={pageProps?.auth}>
            <Layout>
              <Toast />
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

SimpleBBS.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  const auth = await getUser(appContext.ctx);

  if (
    typeof window === "undefined" &&
    appContext.ctx.res.writeHead &&
    !auth?.isLogin &&
    appContext.ctx.pathname !== "/signin"
  ) {
    appContext.ctx.res.writeHead(301, { location: "/signin" });
    appContext.ctx.res.end();
  }

  return {
    pageProps: {
      ...appProps,
      auth,
    },
  };
};

export default SimpleBBS;
