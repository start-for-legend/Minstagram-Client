export type chatterType = "opponent" | "self";

export type profileTypes = {
  userId: number;
};

export interface msgTypes {
  chatterType: chatterType;
  message: string;
  msgId: number;
}
