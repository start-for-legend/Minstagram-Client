export interface userType {
  countPost?: number;
  follower?: number;
  following?: number;
  name?: string;
  nickName?: string;
  profileUrl?: string;
  userId: number;
  feeds: Array<feedType>;
  leels: Array<leelsType>;
}

type feedType = {
  feedId: number;
  feedUrlOne?: string;
};

export type leelsType = {
  leelsId: number;
  leelsUrl: string;
};
