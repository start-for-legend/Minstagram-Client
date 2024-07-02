import { useEffect, useState } from "react";

import { API } from "../../API/API";
import HomeFeedItem from "./items/feedItem";
import FeedHeader from "./header";
import * as S from "./style";
import RecommendUser from "./recommendUser";
import { userType } from "../../types/userType";
import { feedType } from "../../types/feedType";
import NoHomeData from "../common/noData";

interface mainResponseProps {
  feedResponses: feedType[];
  mainStoryResponses: object;
}

const HomeTab = () => {
  const [myProfile, setMyProfile] = useState<userType>();
  const [mainData, setMainData] = useState<mainResponseProps>();
  const [feedResponses, setFeedResponses] = useState<feedType[]>();

  useEffect(() => {
    const getMain = async () => {
      await API({
        method: "get",
        url: "/main",
      }).then((res) => {
        setMainData(res.data);
        setFeedResponses(res.data.feedResponses);
      });
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
        {feedResponses?.map((element) => {
          return <HomeFeedItem element={element} key={element.feedId} />;
        })}
        {feedResponses ? <NoHomeData contentType="home" /> : ""}
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
