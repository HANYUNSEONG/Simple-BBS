import { StatusCodeType } from "@/types/toast";
import { atom } from "recoil";

export const toastAtom = atom({
  key: "toastStatus",
  default: {
    type: "info" as StatusCodeType,
    showing: false,
    message: "",
  },
});
