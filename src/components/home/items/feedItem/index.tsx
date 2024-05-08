import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis, fas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import ProfileItem from "../profileItem";
import { SIUU } from "../../../../assets/files";
import * as S from "./style";

const HomeFeedItem = () => {
  const [like, setLike] = useState(false);
  const [feedModal, setFeedModal] = useState(false);
  const [doubleClicked, setDoubleClicked] = useState(false);

  const onDoubleClick = () => {
    setLike(true);
    setDoubleClicked(true);
    setTimeout(() => setDoubleClicked(false), 2000);
  };

  return (
    <S.FeedItem>
      <S.FeedHeader>
        <ProfileItem watched={false} width={3} />
        <S.ProfileName>JotChelsea</S.ProfileName>
        <S.UploadTime>3시간</S.UploadTime>
        <FontAwesomeIcon icon={faEllipsis} size="2x" />
      </S.FeedHeader>
      <S.FeedImg onDoubleClick={onDoubleClick}>
        <SIUU height="40em" />
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
          onClick={() => setLike(!like)}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => setFeedModal(!feedModal)}
          icon={fas.faComment}
          size="2x"
        />
        <FontAwesomeIcon icon={fas.faPaperPlane} size="2x" />
        <S.FeedTitle>좋아요 8.2만개</S.FeedTitle>
        <S.FeedTitle>
          <Link to="/profile">JotChelsea</Link> 안녕하세요
        </S.FeedTitle>
        <S.Comment onClick={() => setFeedModal(!feedModal)}>
          댓글 100개 더 보기
        </S.Comment>
      </S.FeedFooter>
      {feedModal
        ? /*         <FeedModal modalState={feedModal} setModalState={setFeedModal} />
          여기에 props element 넣어주기!!! */ ""
        : ""}
    </S.FeedItem>
  );
};

export default HomeFeedItem;
