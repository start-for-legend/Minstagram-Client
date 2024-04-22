export interface noticeInterface {
  createAt: Date;
  noticeId: number;
  noticeType: noticeType;
  data: any;
  userResponse: userResponse;
  read: boolean;
  url?: string;
  valid: boolean;
}

export interface userResponse {
  follower: number;
  following: number;
  name: string;
  nickname: string;
  profileUrl?: string;
  userId: number;
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
