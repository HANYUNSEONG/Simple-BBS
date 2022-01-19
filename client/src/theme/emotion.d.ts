import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      GRAY_COLOR1: string;
      GRAY_COLOR2: string;
      GRAY_COLOR3: string;

      DEFAULT_RADIUS: string;
    };

    deviceMedia: {
      DESKTOP: string;
      TABLET: string;
      MOBILE: string;
    };
  }
}
