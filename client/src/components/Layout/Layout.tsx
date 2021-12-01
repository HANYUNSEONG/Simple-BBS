import React from "react";
import Header from "../Header";
import { LayoutWrapper } from "./styles";

interface ILayout {
  children: React.ReactNode;
}
function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
}

export default Layout;
