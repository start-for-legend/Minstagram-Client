import ReactModal from "react-modal";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faEllipsis,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import ProfileItem from "../../../home/items/profileItem";
import * as S from "./style";
import { feedType } from "../../../../types/feedType";
import CommentItem from "./commentItem";
import { API } from "../../../../API/API";
import { commentType } from "../../../../types/commentType";

const FeedModalProfile = ({
  modalState,
  setModalState,
  feedIdProfile,
}: {
  modalState: boolean;
  setModalState: Function;
  feedIdProfile: number;
}) => {
  const [feedData, setFeedData] = useState<feedType>();
  const [comments, setComments] = useState<commentType[]>([]);
  const [postCmt, setPostCmt] = useState<string>();
  const [cmtIdx, setCmtIdx] = useState<number | undefined>(0);
  const [feedLiked, setFeedLiked] = useState(false);

  useEffect(() => {
    setCmtIdx(comments?.length);
  }, [comments]);

  const getComment = async () => {
    await API({
      method: "get",
      url: `/feed-comment/${feedIdProfile}`,
    }).then((res) => setComments(res.data));
  };

  useEffect(() => {
    const getFeed = async () => {
      await API({
        method: "get",
        url: `/feed/${feedIdProfile}`,
      }).then((res) => setFeedData(res.data));
    };
    const getValid = async () => {
      await API({
        url: `/feed/valid/${feedIdProfile}`,
        method: "get",
      }).then((res) => setFeedLiked(res.data.isTrue));
    };

    getValid();
    getComment();
    getFeed();
  }, []);

  const cmtSend = async () => {
    await API({
      method: "post",
      url: `/feed-comment/${feedIdProfile}`,
      data: {
        content: postCmt,
      },
    }).then((res) => {
      console.log(res);
      setPostCmt("");
      getComment();
    });
  };

  const getMoreComment = async () => {
    if (cmtIdx && comments) {
      await API({
        method: "get",
        url: `/feed-comment/${feedIdProfile}?lastCommentId=${comments[cmtIdx - 1].feedCommentId}`,
      }).then((res) => {
        if (res.data.length > 1) {
          setComments((prev) => [...prev, ...res.data]);
        } else {
          alert("no more bullets");
        }
      });
    }
  };

  return (
    <ReactModal
      isOpen={modalState}
      onRequestClose={() => setModalState(false)}
      style={S.feedModalStyles}
    >
      <S.modalImg>
        <img src={feedData ? feedData.fileUrls[0] : ""} />
      </S.modalImg>
      <S.right>
        <S.modalHeader>
          <ProfileItem watched={false} width={3} />
          <S.profileName>{feedData?.userResponse.nickName}</S.profileName>
          <S.followBtn>팔로우</S.followBtn>
          <FontAwesomeIcon icon={faEllipsis} size="2x" />
        </S.modalHeader>
        <S.commentContainer>
          <S.commentScrollContainer>
            {comments && comments?.length !== 0 ? (
              comments.map((element: commentType) => {
                return (
                  <CommentItem
                    key={element.feedCommentId}
                    feedId={feedIdProfile}
                    cmtData={element}
                  />
                );
              })
            ) : (
              <div>아직 아무런 댓글이 달리지 않았어요!</div>
            )}
            <FontAwesomeIcon
              onClick={getMoreComment}
              icon={faCirclePlus}
              size="2x"
            />
          </S.commentScrollContainer>
          <S.commentFooter onSubmit={(event) => event.preventDefault()}>
            <FontAwesomeIcon
              icon={feedLiked ? fas.faHeart : far.faHeart}
              onClick={() => setFeedLiked(!feedLiked)}
              color={feedLiked ? "red" : "black"}
              size="2x"
            />
            <FontAwesomeIcon icon={far.faPaperPlane} size="2x" />
            <div>좋아요 0개</div>
            <S.commentSend>
              <ProfileItem watched={false} width={3} />
              <input
                type="text"
                placeholder="댓글 달기"
                value={postCmt}
                onChange={(e) => setPostCmt(e.target.value)}
              />
              <button onClick={cmtSend} type="submit" id="cmtSubmit">
                게시
              </button>
            </S.commentSend>
          </S.commentFooter>
        </S.commentContainer>
      </S.right>
    </ReactModal>
  );
};

export default FeedModalProfile;
