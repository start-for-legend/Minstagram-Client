import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faVideo } from "@fortawesome/free-solid-svg-icons";

import ProfileHeader from "./header";
import { searchStateAtom, userResponseAtom } from "../../recoil/Atoms/atoms";
import * as S from "./style";
import FeedItemProfile from "../common/feedItem/indexProfile";
import { API } from "../../API/API";

const ProfileComponent = () => {
  const userResponse = useRecoilValue(userResponseAtom);
  const searchState = useRecoilValue(searchStateAtom);
  const [curTab, setCurTab] = useState(false);
  const [myProfile, setMyProfile] = useState(false);
  const [followValid, setFollowValid] = useState(false);
  const myUserId = Number(window.localStorage.getItem("myUserId"));

  useEffect(() => {
    if (userResponse) {
      const getFollowValid = () => {
        API({
          method: "get",
          url: `/follow/valid/${userResponse.userId}`,
        }).then((res) => setFollowValid(res.data.isTrue));
      };

      if (myUserId === userResponse.userId) {
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
            <S.selectTabItem onClick={() => setCurTab(false)} curTab={curTab}>
              <FontAwesomeIcon icon={faList} size="1x" />
              피드
            </S.selectTabItem>
            <S.selectTabItem onClick={() => setCurTab(true)} curTab={curTab}>
              <FontAwesomeIcon icon={faVideo} size="1x" />
              릴스
            </S.selectTabItem>
          </S.selectTab>
          <S.feedGrid>
            {userResponse.feeds.map((element) => {
              return (
                <FeedItemProfile
                  key={element.feedId}
                  feedId={element.feedId}
                  fileUrls={element.feedUrlOne || ""}
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
