import { atom } from "recoil";

export const isActiveSearchAtom = atom<boolean>({
  key: "isActiveSearchAtom",
  default: false,
});

export const isActiveAddFriendAtom = atom<boolean>({
  key: "isActiveAddFriendAtom",
  default: false,
});

export const isActiveAddRoomAtom = atom<boolean>({
  key: "isActiveAddRoomAtom",
  default: false,
});
