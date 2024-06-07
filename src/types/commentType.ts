import { userType } from "./userType";

export interface commentType {
  content?: string;
  comment?: string;
  feedCommentId?: number;
  leelsCommentId?: number;
  heartCount: number;
  modify: boolean;
  user?: userType;
  author?: userType;
  feedCommentReplyId?: number;
  leelsCommentReplyId?: number;
}
