import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis, fas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import ProfileItem from "../profileItem";
import { SIUU } from "../../../../assets/files";
import * as S from "./style";
import { feedType } from "../../../../types/feedType";
import { API } from "../../../../API/API";
import FeedModal from "../../../common/feedItem/feedModal";

const HomeFeedItem = ({
  element: { content, feedId, fileUrls, hashtags, heartCount, userResponse },
}: {
  element: feedType;
}) => {
  const feedElement: feedType = {
    content,
    feedId,
    fileUrls,
    hashtags,
    heartCount,
    userResponse,
  };
  const [like, setLike] = useState(false);
  const [feedModal, setFeedModal] = useState(false);
  const [doubleClicked, setDoubleClicked] = useState(false);

  const onDoubleClick = () => {
    setLike(true);
    setDoubleClicked(true);
    setTimeout(() => setDoubleClicked(false), 2000);
  };

  useEffect(() => {
    API({
      method: "get",
      url: `feed/valid/${feedId}`,
    }).then((res) => {
      if (res.data.isTrue) {
        setLike(true);
      }
    });
  }, []);

  const onClickLike = () => {
    if (!like) {
      API({
        method: "post",
        url: `/feed/${feedId}`,
      });
    } else {
      API({
        method: "patch",
        url: `/feed/${feedId}`,
      });
    }
    setLike(!like);
  };

  return (
    <S.FeedItem>
      <S.FeedHeader>
        <ProfileItem
          profileURL={userResponse.profileUrl}
          watched={false}
          width={3}
        />
        <S.ProfileName>{userResponse.nickName}</S.ProfileName>
        {/* <S.UploadTime>3시간</S.UploadTime> */}
        <FontAwesomeIcon icon={faEllipsis} size="2x" />
      </S.FeedHeader>
      <S.FeedImg onDoubleClick={onDoubleClick}>
        <img src={fileUrls[0]} />
        {doubleClicked ? (
          <FontAwesomeIcon icon={fas.faHeart} color="red" size="5x" />
        ) : (
          ""
        )}
      </S.FeedImg>
      <S.FeedFooter like={like}>
        <FontAwesomeIcon
          icon={like ? fas.faHeart : far.faHeart}
          color={like ? "red" : "black"}
          onClick={onClickLike}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => setFeedModal(!feedModal)}
          icon={fas.faComment}
          size="2x"
        />
        <FontAwesomeIcon icon={fas.faPaperPlane} size="2x" />
        <S.FeedTitle>좋아요 {heartCount}개</S.FeedTitle>
        <S.FeedTitle>
          <Link to={`/profile/${userResponse.userId}`}>
            {userResponse.nickName} |
          </Link>{" "}
          {content}
        </S.FeedTitle>
        <S.Hashtags>
          {hashtags.map((element) => {
            return <span key={element}>#{element}</span>;
          })}
        </S.Hashtags>
        <S.Comment onClick={() => setFeedModal(!feedModal)}>
          자세히 보기
        </S.Comment>
      </S.FeedFooter>
      {feedModal ? (
        <FeedModal
          element={feedElement}
          modalState={feedModal}
          setModalState={setFeedModal}
        />
      ) : (
        ""
      )}
    </S.FeedItem>
  );
};

export default HomeFeedItem;
