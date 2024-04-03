export type chatterType = "opponent" | "self";

export type profileTypes = {
  chatRoomId: string;
  lastMessage: string;
  lastMessageTime: Date;
  opponentId: number;
  opponentNickName: string;
  opponentProfileUrl: string;
};

export interface msgTypes {
  chatterType: chatterType;
  message: string;
  msgId: number;
}
