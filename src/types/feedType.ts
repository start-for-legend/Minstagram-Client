import { userType } from "./userType";

export interface feedType {
  content: string;
  feedId: number;
  fileUrls: string[];
  hashtags: string[];
  userResponse: userType;
}
