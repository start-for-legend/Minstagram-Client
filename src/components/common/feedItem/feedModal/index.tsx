import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faEllipsis,
  faXmarkCircle,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { far } from "@fortawesome/free-regular-svg-icons";

import ProfileItem from "../../../home/items/profileItem";
import * as S from "./style";
import { feedType } from "../../../../types/feedType";
import CommentItem from "./commentItem";
import { API } from "../../../../API/API";
import { commentType } from "../../../../types/commentType";
import { cmtReplyAtom } from "../../../../recoil/Atoms/atoms";

const FeedModal = ({
  element: { content, feedId, fileUrls, hashtags, userResponse, heartCount },
  modalState,
  setModalState,
}: {
  element: feedType;
  modalState: boolean;
  setModalState: Function;
}) => {
  const [comments, setComments] = useState<commentType[]>([]);
  const [postCmt, setPostCmt] = useState<string>();
  const [cmtIdx, setCmtIdx] = useState<number | undefined>(0);
  const [feedLiked, setFeedLiked] = useState(false);
  const [curHeartCount, setCurHeartCount] = useState(heartCount);
  const [cmtReply, setCmtReply] = useRecoilState(cmtReplyAtom);

  const onLikeClick = async () => {
    if (!feedLiked) {
      await API({
        url: `/feed/${feedId}`,
        method: "post",
      })
        .then(() => setCurHeartCount(curHeartCount + 1))
        .catch((err) => console.log(err.response.status));
    } else {
      await API({
        url: `/feed/${feedId}`,
        method: "patch",
      }).then(() => setCurHeartCount(curHeartCount - 1));
    }
    setFeedLiked(!feedLiked);
  };

  useEffect(() => {
    setCmtIdx(comments?.length);
  }, [comments]);

  const getComment = async () => {
    await API({
      method: "get",
      url: `/feed-comment/${feedId}`,
    }).then((res) => setComments(res.data));
  };

  useEffect(() => {
    const getValid = async () => {
      await API({
        url: `/feed/valid/${feedId}`,
        method: "get",
      }).then((res) => setFeedLiked(res.data.isTrue));
    };
    getValid();
    getComment();
  }, []);

  const cmtSend = async () => {
    if (cmtReply.isReply) {
      await API({
        method: "post",
        url: `/feed-comment-reply/${feedId}/${cmtReply.replyUserId}`,
        data: {
          content: postCmt,
        },
      }).then((res) => console.log(res.data));
    } else {
      await API({
        method: "post",
        url: `/feed-comment/${feedId}`,
        data: {
          content: postCmt,
        },
      }).then((res) => {
        console.log(res);
        getComment();
      });
    }
    setPostCmt("");
  };

  const getMoreComment = async () => {
    if (cmtIdx && comments) {
      await API({
        method: "get",
        url: `/feed-comment/${feedId}?lastCommentId=${comments[cmtIdx - 1].feedCommentId}`,
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
        <img src={fileUrls ? fileUrls[0] : ""} />
      </S.modalImg>
      <S.right>
        <S.modalHeader>
          <ProfileItem
            profileURL={userResponse.profileUrl}
            watched={false}
            width={3}
          />
          <S.profileName>{userResponse.nickName}</S.profileName>
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
                    feedId={feedId}
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
          {cmtReply.isReply ? (
            <S.replyTo>
              {cmtReply.replyUserName}에게 답글 보내기...
              <FontAwesomeIcon
                icon={faXmarkCircle}
                size="2xs"
                onClick={() =>
                  setCmtReply({
                    isReply: false,
                    replyUserId: undefined,
                    replyUserName: undefined,
                  })
                }
              />
            </S.replyTo>
          ) : (
            ""
          )}
          <S.commentFooter onSubmit={(e) => e.preventDefault()}>
            <FontAwesomeIcon
              icon={feedLiked ? fas.faHeart : far.faHeart}
              onClick={onLikeClick}
              color={feedLiked ? "red" : "black"}
              size="2x"
            />
            <FontAwesomeIcon icon={far.faPaperPlane} size="2x" />
            <div>{content}</div>
            <S.hashtags>
              {hashtags.map((element) => {
                return <span key={element}>#{element}</span>;
              })}
            </S.hashtags>
            <div>좋아요 {curHeartCount}개</div>
            <S.commentSend>
              <ProfileItem
                profileURL={userResponse.profileUrl}
                watched={false}
                width={3}
              />
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

export default FeedModal;
