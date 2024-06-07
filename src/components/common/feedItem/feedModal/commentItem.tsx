import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

import { cmtReplyAtom } from "../../../../recoil/Atoms/atoms";
import { API } from "../../../../API/API";
import ProfileItem from "../../../home/items/profileItem";
import { commentType } from "../../../../types/commentType";
import * as S from "./style";
import { curTabType } from "../../../../types/profileType";

interface cmtItemProps {
  cmtData: commentType;
  feedId: number;
  origin?: boolean;
  replyCmtId?: number;
  heartCount: number;
  prevCmtId?: number;
  postType?: curTabType;
}

const CommentItem = ({
  cmtData,
  feedId,
  origin,
  replyCmtId,
  heartCount,
  prevCmtId,
  postType,
}: cmtItemProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(heartCount);
  const [replyShow, setReplyShow] = useState(false);
  const [replyData, setReplyData] = useState<commentType[]>();
  const setCmtReply = useSetRecoilState(cmtReplyAtom);
  const isLike = liked ? 1 : 0;

  useEffect(() => {
    if (origin) {
      API({
        method: "get",
        url: `/${postType}-comment-reply/${feedId}/${cmtData.feedCommentId || cmtData.leelsCommentId}`,
      }).then((res) => {
        console.log(res.data);
        setReplyData(res.data);
      });
      API({
        method: "get",
        url: `/${postType}-comment/${feedId}/valid/${cmtData.feedCommentId || cmtData.leelsCommentId}`,
      }).then((res) => {
        setLiked(res.data.isTrue);
        if (res.data.isTrue) setLikeCount(likeCount - 1);
      });
    } else {
      API({
        method: "get",
        url: `/${postType}-comment-reply/${feedId}/${prevCmtId}/valid/${replyCmtId}`,
      }).then((res) => {
        setLiked(res.data.isTrue);
      });
    }

    if (heartCount) {
      console.log(heartCount);
    }
  }, []);

  const likeCmt = () => {
    if (liked) {
      API({
        method: postType === "feed" ? "delete" : "put",
        url: origin
          ? `${postType}-comment/${feedId}/${postType === "feed" ? `${cmtData.feedCommentId}/like` : cmtData.leelsCommentId}`
          : `/${postType}-comment-reply/${feedId}/${prevCmtId}/${replyCmtId}/like`,
      }).then(() => {
        setLiked(!liked);
      });
    } else {
      API({
        method: "post",
        url: origin
          ? `${postType}-comment/${feedId}/${postType === "feed" ? cmtData.feedCommentId : cmtData.leelsCommentId}`
          : `/${postType}-comment-reply/${feedId}/${prevCmtId}/${replyCmtId}`,
      }).then(() => setLiked(!liked));
    }
  };

  return (
    <S.commentItem>
      <ProfileItem
        profileURL={cmtData.user?.profileUrl || cmtData.author?.profileUrl}
        watched={false}
        width={2.5}
      />
      <S.commentTab>
        <span>
          <b>{cmtData.user?.nickName || cmtData.author?.nickName}</b>
        </span>
        <S.commentInfo>{cmtData.modify ? "수정됨 &apos;" : ""}</S.commentInfo>
        <S.commentFlex>
          <S.commentContent>
            {cmtData.content || cmtData.comment}
          </S.commentContent>
          <div>
            <FontAwesomeIcon
              onClick={likeCmt}
              color={liked ? "red" : "black"}
              icon={liked ? fas.faHeart : far.faHeart}
              size="2x"
            />
            <S.heartCount>{likeCount + isLike}</S.heartCount>
          </div>
        </S.commentFlex>
        {origin ? (
          <>
            <S.commentMore onClick={() => setReplyShow(!replyShow)}>
              답글 보기 ({replyData?.length})
            </S.commentMore>
            <S.commentMore
              onClick={() =>
                setCmtReply({
                  isReply: true,
                  replyUserId: cmtData.feedCommentId || cmtData.leelsCommentId,
                  replyUserName:
                    cmtData.user?.nickName || cmtData.author?.nickName,
                })
              }
            >
              답글 쓰기
            </S.commentMore>
          </>
        ) : (
          ""
        )}
      </S.commentTab>
      {origin &&
        replyShow &&
        replyData?.map((element: commentType) => {
          console.log(element);
          return (
            <CommentItem
              postType={postType}
              cmtData={element}
              feedId={feedId}
              prevCmtId={cmtData.feedCommentId || cmtData.leelsCommentId}
              replyCmtId={
                element.feedCommentReplyId || element.leelsCommentReplyId
              }
              heartCount={element.heartCount}
              key={element.feedCommentId}
            />
          );
        })}
    </S.commentItem>
  );
};

export default CommentItem;
