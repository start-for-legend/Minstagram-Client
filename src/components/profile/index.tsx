import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faVideo } from "@fortawesome/free-solid-svg-icons";

import ProfileHeader from "./header";
import { searchStateAtom, userResponseAtom } from "../../recoil/Atoms/atoms";
import * as S from "./style";
import FeedItem from "../common/feedItem";
import FeedItemProfile from "../common/feedItem/indexProfile";

const ProfileComponent = () => {
  const userResponse = useRecoilValue(userResponseAtom);
  const searchState = useRecoilValue(searchStateAtom);
  const [curTab, setCurTab] = useState(false);

  useEffect(() => {
    console.log(userResponse);
  }, []);
  return (
    <S.profileContainer searchState={searchState}>
      {userResponse ? (
        <>
          <ProfileHeader />
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