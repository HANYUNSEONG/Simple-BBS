import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      GRAY_COLOR1: string;
      GRAY_COLOR2: string;
    };
  }
}
