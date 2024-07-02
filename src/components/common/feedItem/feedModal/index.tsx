import ReactModal from "react-modal";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faEllipsis,
  faXmarkCircle,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import ProfileItem from "../../../home/items/profileItem";
import * as S from "./style";
import { feedType, reelsType } from "../../../../types/feedType";
import CommentItem from "./commentItem";
import { API } from "../../../../API/API";
import { commentType } from "../../../../types/commentType";
import { cmtReplyAtom } from "../../../../recoil/Atoms/atoms";
import { curTabType } from "../../../../types/profileType";
import NoHomeData from "../../noData";

const FeedModal = ({
  modalState,
  setModalState,
  feedIdProfile,
  postType,
  leelsUrl,
}: {
  modalState: boolean;
  setModalState: Function;
  feedIdProfile: number;
  postType: curTabType;
  leelsUrl: string;
}) => {
  const [feedData, setFeedData] = useState<feedType>();
  const [reelsData, setReelsData] = useState<reelsType>();
  const [comments, setComments] = useState<commentType[]>([]);
  const [postCmt, setPostCmt] = useState<string>();
  const [cmtIdx, setCmtIdx] = useState<number | undefined>(0);
  const [feedLiked, setFeedLiked] = useState(false);
  const [cmtReply, setCmtReply] = useRecoilState(cmtReplyAtom);
  const [reelsPlaying, setReelsPlaying] = useState(true);
  const [heartCounts, setHeartCounts] = useState(0);
  const isLike = feedLiked ? 1 : 0;

  useEffect(() => {
    setCmtIdx(comments?.length);
  }, [comments]);

  const getComment = async () => {
    await API({
      method: "get",
      url: `/${postType}-comment/${feedIdProfile}`,
    }).then((res) => setComments(res.data));
  };
  useEffect(() => {
    const getFeed = async () => {
      await API({
        method: "get",
        url: `/${postType}/${feedIdProfile}`,
      }).then((res) => {
        postType === "feed" ? setFeedData(res.data) : setReelsData(res.data);
      });
    };
    const getValid = async () => {
      await API({
        url: `/${postType}/valid/${feedIdProfile}`,
        method: "get",
      }).then((res) => {
        setFeedLiked(res.data.isTrue);
        if (res.data.isTrue) setHeartCounts(heartCounts - 1);
      });
    };

    getValid();
    getComment();
    getFeed();
  }, []);

  const cmtSend = async () => {
    if (cmtReply.isReply) {
      await API({
        method: "post",
        url: `/${postType}-comment-reply/${feedIdProfile}/${cmtReply.replyUserId}`,
        data:
          postType === "feed"
            ? {
                content: postCmt,
              }
            : {
                comment: postCmt,
              },
      }).then(() =>
        setCmtReply({ isReply: false, replyUserId: -1, replyUserName: "" })
      );
    } else {
      await API({
        method: "post",
        url: `/${postType}-comment/${feedIdProfile}`,
        data:
          postType === "feed"
            ? {
                content: postCmt,
              }
            : {
                comment: postCmt,
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
        url: `/${postType}-comment/${feedIdProfile}?lastCommentId=${comments[cmtIdx - 1].feedCommentId || comments[cmtIdx - 1].leelsCommentId}`,
      }).then((res) => {
        if (res.data.length > 1) {
          setComments((prev) => [...prev, ...res.data]);
        } else {
          alert("마지막 댓글입니다.");
        }
      });
    }
  };

  useEffect(() => {
    if (typeof feedData?.heartCount === "number")
      setHeartCounts(heartCounts + (feedData?.heartCount || 0));
    else if (typeof reelsData?.heartCount === "number")
      setHeartCounts(heartCounts + (reelsData?.heartCount || 0));
  }, [feedData, reelsData]);

  return (
    <ReactModal
      isOpen={modalState}
      onRequestClose={() => {
        setModalState(false);
        setCmtReply({ isReply: false, replyUserId: -1, replyUserName: "" });
      }}
      style={S.feedModalStyles}
    >
      <S.modalImg onClick={() => setReelsPlaying(!reelsPlaying)}>
        {postType === "feed" ? (
          <img src={feedData ? feedData.fileUrls[0] : ""} />
        ) : (
          <ReactPlayer
            url={leelsUrl}
            width="52em"
            height="52em"
            loop
            controls
            playing={reelsPlaying}
          />
        )}
      </S.modalImg>
      <S.right>
        <S.modalHeader>
          {postType === "feed" ? (
            <>
              <ProfileItem
                profileURL={feedData?.userResponse.profileUrl}
                watched={false}
                width={3}
              />
              <S.profileName>{feedData?.userResponse.nickName}</S.profileName>
            </>
          ) : (
            <>
              <ProfileItem
                profileURL={reelsData?.author.profileUrl}
                watched={false}
                width={3}
              />
              <S.profileName>{reelsData?.author.nickName}</S.profileName>
            </>
          )}
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
                    postType={postType}
                    heartCount={element.heartCount}
                    origin
                  />
                );
              })
            ) : (
              <NoHomeData contentType="comment" />
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
          <S.commentFooter onSubmit={(event) => event.preventDefault()}>
            <FontAwesomeIcon
              icon={feedLiked ? fas.faHeart : far.faHeart}
              onClick={() => setFeedLiked(!feedLiked)}
              color={feedLiked ? "red" : "black"}
              size="2x"
            />
            <FontAwesomeIcon icon={far.faPaperPlane} size="2x" />
            <div>
              {postType === "feed" ? feedData?.content : reelsData?.content}
            </div>
            <div>좋아요 {heartCounts + isLike}개</div>
            <S.commentSend>
              <ProfileItem
                profileURL={feedData?.userResponse.profileUrl}
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
