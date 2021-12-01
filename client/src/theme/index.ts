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

export default theme;
