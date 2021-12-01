import Layout from "@/components/Layout";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import theme from "@/theme";

function SimpleBBS({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default SimpleBBS;
