import { Global } from "@emotion/react";
import { Html, Head, Main, NextScript } from "next/document";
import { globalStyle } from "@/theme/GlobalStyle";

function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="shortcut icon" href="/simple-bbs-logo.png" />
      </Head>
      <body>
        <Global styles={globalStyle} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
