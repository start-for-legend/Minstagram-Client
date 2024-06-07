import { userType } from "./userType";

export interface feedType {
  content: string;
  feedId: number;
  fileUrls: string[];
  hashtags: string[];
  userResponse: userType;
  heartCount: number;
}

export interface reelsType {
  content: string;
  feedId: number;
  fileUrls: string[];
  hashtags: string[];
  author: userType;
  heartCount: number;
}

export interface cmtReply {
  isReply: boolean;
  replyUserId?: number;
  replyUserName?: string;
}
