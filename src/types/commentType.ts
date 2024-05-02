import { userType } from "./userType";

export interface commentType {
  content: string;
  feedCommentId: number;
  heartCount: number;
  modify: boolean;
  user: userType;
}
