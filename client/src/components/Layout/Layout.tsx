import Head from "next/head";
import React from "react";
import Header from "../Header";
import { LayoutBody, LayoutWrapper } from "./styles";

interface ILayout {
  children: React.ReactNode;
}
function Layout({ children }: ILayout) {
  return (
    <LayoutWrapper>
      <Head>
        <title>Simple BBS</title>
      </Head>
      <Header />
      <LayoutBody>{children}</LayoutBody>
    </LayoutWrapper>
  );
}

export default Layout;
