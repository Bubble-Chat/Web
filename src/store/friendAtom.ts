import { atom } from "recoil";

export const isActiveSearchAtom = atom<boolean>({
  key: "isActiveSearchAtom",
  default: false,
});
