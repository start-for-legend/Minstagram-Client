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
  chatId?: number;
  userId: number;
  chat: string;
  chatTime?: Date;
  chatterType: chatterType;
}

export interface editMsgTypes {
  editing: boolean;
  chatId: number;
  chat: string;
}
