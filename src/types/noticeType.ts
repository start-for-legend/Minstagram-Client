import { userType } from "./userType";

export interface noticeInterface {
  createAt: string;
  noticeId: number;
  noticeType: noticeType;
  data: any;
  userResponse: userType;
  read: boolean;
  url?: string;
  valid: boolean;
}

export type noticeType =
  | "MESSAGE"
  | "LEELS_LIKE"
  | "LEELS_COMMENT"
  | "LEELS_COMMENT_LIKE"
  | "LEELS_COMMENT_REPLY"
  | "LEELS_COMMENT_REPLY_LIKE"
  | "FEED_LIKE"
  | "FEED_COMMENT"
  | "FEED_COMMENT_LIKE"
  | "FEED_COMMENT_REPLY"
  | "FEED_COMMENT_REPLY_LIKE"
  | "FOLLOW";
