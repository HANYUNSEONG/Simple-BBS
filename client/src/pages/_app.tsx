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

function SimpleBBS({ Component, pageProps }: AppProps) {
  const isProd = process.env.NODE_ENV === "production";
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          {!isProd && <ReactQueryDevtools />}
          <Layout>
            <Toast />
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </Layout>
        </RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default SimpleBBS;
