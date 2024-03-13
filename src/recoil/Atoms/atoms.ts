import { atom } from "recoil";

export const searchStateAtom = atom<boolean>({
  key: "searchStateAtom",
  default: false,
});
