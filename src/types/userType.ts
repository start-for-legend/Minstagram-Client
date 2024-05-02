export interface userType {
  countPost: number;
  follower: number;
  following: number;
  name: string;
  nickName: string;
  profileUrl?: string;
  userId: number;
  feeds: Array<userFeedsType>;
  leels: Array<userFeedsType>;
}

export type userFeedsType = {
  awsUrl: string;
};
