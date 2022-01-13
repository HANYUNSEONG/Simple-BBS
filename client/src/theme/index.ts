const palette = {
  GRAY_COLOR1: "#f5f5f5",
  GRAY_COLOR2: "#eee",
  GRAY_COLOR3: "#ccc",

  DEFAULT_RADIUS: "20px",
};

const theme = { palette };

export type CommonColorType = "black" | "white" | "transparent";
type CommonColorTypes = {
  [key in CommonColorType]: {
    backgroundColor: string;
    fontColor: string;
  };
};
export const CommonColor: CommonColorTypes = {
  black: {
    backgroundColor: "#222",
    fontColor: "#fff",
  },
  white: {
    backgroundColor: "#fff",
    fontColor: "#222",
  },
  transparent: {
    backgroundColor: "transparent",
    fontColor: "#222",
  },
};

type deviceType = "DESKTOP" | "TABLET" | "MOBILE";
export const deviceSizeMap: { [key in deviceType]: string } = {
  DESKTOP: "1440px",
  TABLET: "768px",
  MOBILE: "375px",
};

export const deviceMedia: { [key in deviceType]: string } = {
  DESKTOP: `screen and (max-width: ${deviceSizeMap.DESKTOP})`,
  TABLET: `screen and (max-width: ${deviceSizeMap.TABLET})`,
  MOBILE: `screen and (max-width: ${deviceSizeMap.MOBILE})`,
};

export default theme;
