import { userType } from "./userType";

export interface reelsInterface {
  author?: userType;
  content?: string;
  hashtags?: string[];
  leelsId?: number;
  leelsUrl?: string;
  heartCount?: number;
}

export interface reelsCmtItemTypes {
  data: reelsCmtInterface;
  reelsId?: number;
}

export interface reelsCmtInterface {
  author?: userType;
  comment?: string;
  heartCount?: number;
  leelsCommentId?: number;
  modify?: boolean;
}
