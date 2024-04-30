export interface userType {
  countPost: number;
  follower: number;
  following: number;
  name: string;
  nickName: string;
  profileUrl?: string;
  userId: number;
  feeds: Array<feedsType>;
  leels: Array<feedsType>;
}

export type feedsType = {
  awsUrl: string;
};
