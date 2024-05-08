import { atom } from "recoil";

import { noticeInterface } from "../../types/noticeType";
import { userType } from "../../types/userType";
import { cmtReply } from "../../types/feedType";

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

export const noticeStateAtom = atom<boolean>({
  key: "noticeStateAtom",
  default: false,
});

export const noticeDataAtom = atom<noticeInterface[]>({
  key: "noticeDataAtom",
  default: [],
});

export const noticeDataIdsAtom = atom<number[]>({
  key: "noticeDataIdsAtom",
  default: [],
});

export const allNoticeReadAtom = atom<boolean>({
  key: "noticeDataIdsAtom",
  default: false,
});

export const userResponseAtom = atom<userType>({
  key: "userResponseAtom",
  default: undefined,
});

export const myAccAtom = atom<boolean>({
  key: "myAccAtom",
  default: false,
});

export const cmtReplyAtom = atom<cmtReply>({
  key: "cmtToAtom",
  default: {
    isReply: false,
  },
});
