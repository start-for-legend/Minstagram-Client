import { useEffect, useState } from "react";

import { API } from "../../API/API";
import HomeFeedItem from "./items/feedItem";
import FeedHeader from "./header";
import * as S from "./style";
import RecommendUser from "./recommendUser";
import { userType } from "../../types/userType";

const HomeTab = () => {
  const [myProfile, setMyProfile] = useState<userType>();
  useEffect(() => {
    const getMain = async () => {
      await API({
        method: "get",
        url: "/main",
      }).then((res) => console.log(res.data));
    };

    const getProfile = async () => {
      await API({
        method: "get",
        url: "/user",
      }).then((res) => setMyProfile(res.data));
    };

    getProfile();
    getMain();
  }, []);

  return (
    <S.HomeContainer>
      <S.FeedContainer>
        <FeedHeader />
        <HomeFeedItem />
        <HomeFeedItem />
        <HomeFeedItem />
      </S.FeedContainer>
      <RecommendUser
        userNickName={myProfile?.nickName}
        userName={myProfile?.name}
        profileUrl={myProfile?.profileUrl}
        userId={myProfile?.userId}
      />
    </S.HomeContainer>
  );
};

export default HomeTab;
