import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faVideo } from "@fortawesome/free-solid-svg-icons";

import ProfileHeader from "./header";
import { searchStateAtom, userResponseAtom } from "../../recoil/Atoms/atoms";
import * as S from "./style";
import FeedItemProfile from "../common/feedItem/indexProfile";
import { API } from "../../API/API";
import { myUserId } from "../../lib/tokens";
import { curTabType } from "../../types/profileType";
import NoHomeData from "../common/noData";

const ProfileComponent = () => {
  const userResponse = useRecoilValue(userResponseAtom);
  const searchState = useRecoilValue(searchStateAtom);
  const [curTab, setCurTab] = useState<curTabType>("feed");
  const [myProfile, setMyProfile] = useState(false);
  const [followValid, setFollowValid] = useState(false);
  const myLocalUserId = Number(window.localStorage.getItem(myUserId));

  const getCurTab = (_curTab: curTabType) => {
    return Boolean(curTab === _curTab);
  };

  useEffect(() => {
    if (userResponse) {
      const getFollowValid = () => {
        API({
          method: "get",
          url: `/follow/valid/${userResponse.userId}`,
        }).then((res) => setFollowValid(res.data.isTrue));
      };

      if (myLocalUserId === userResponse.userId) {
        setMyProfile(true);
      }

      getFollowValid();
    }
  }, [userResponse]);

  return (
    <S.profileContainer searchState={searchState}>
      {userResponse ? (
        <>
          <ProfileHeader
            myProfile={myProfile}
            followValid={followValid}
            setFollowValid={setFollowValid}
          />
          <S.selectTab>
            <S.selectTabItem
              curTab={getCurTab("feed")}
              onClick={() => setCurTab("feed")}
            >
              <FontAwesomeIcon icon={faList} size="1x" />
              피드
            </S.selectTabItem>
            <S.selectTabItem
              curTab={getCurTab("leels")}
              onClick={() => setCurTab("leels")}
            >
              <FontAwesomeIcon icon={faVideo} size="1x" />
              릴스
            </S.selectTabItem>
          </S.selectTab>
          {(userResponse.feeds.length === 0 && getCurTab("feed")) ||
          (userResponse.leels.length === 0 && getCurTab("leels")) ? (
            <NoHomeData />
          ) : (
            ""
          )}
          <S.feedGrid curTab={getCurTab("feed")}>
            {userResponse.feeds.map((element) => {
              return (
                <FeedItemProfile
                  key={element.feedId}
                  feedId={element.feedId}
                  fileUrls={element.feedUrlOne || ""}
                  postType="feed"
                />
              );
            })}
          </S.feedGrid>
          <S.feedGrid curTab={getCurTab("leels")}>
            {userResponse.leels.map((element) => {
              return (
                <FeedItemProfile
                  key={element.leelsId}
                  feedId={element.leelsId}
                  fileUrls={element.leelsUrl || ""}
                  postType="leels"
                />
              );
            })}
          </S.feedGrid>
        </>
      ) : (
        "loading..."
      )}
    </S.profileContainer>
  );
};

export default ProfileComponent;
