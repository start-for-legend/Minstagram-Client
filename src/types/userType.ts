export interface userType {
  countPost?: number;
  follower?: number;
  following?: number;
  name?: string;
  nickName?: string;
  profileUrl?: string;
  userId?: number;
  feeds: Array<feedType>;
  leels?: Array<userFeedsType>;
}

type feedType = {
  feedId: number;
  feedUrlOne?: string;
};

export type userFeedsType = {
  awsUrl: string;
};
