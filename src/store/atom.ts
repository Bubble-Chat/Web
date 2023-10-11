import { atom } from "recoil";

export const PageIdx = atom<number>({
  key: "PageIdx",
  default: 0,
});
