export type StatusCodeType = "success" | "error" | "info";
export type StatusColorsType = {
  [key in StatusCodeType]: {
    backgroundColor: string;
    fontColor: string;
  };
};
