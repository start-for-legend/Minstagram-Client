import { atom } from "recoil";

export const searchStateAtom = atom<boolean>({
  key: "searchStateAtom",
  default: false,
});

export const reelsModalStateAtom = atom<boolean>({
  key: "reelsModalStateAtom",
  default: false,
});

export const feedModalStateAtom = atom<boolean>({
  key: "feedModalStateAtom",
  default: false,
});
