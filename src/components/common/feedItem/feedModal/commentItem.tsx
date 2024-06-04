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

interface cmtItemProps {
  cmtData: commentType;
  feedId: number;
  origin?: boolean;
  replyCmtId?: number;
  heartCount?: number;
  prevCmtId?: number;
}

const CommentItem = ({
  cmtData,
  feedId,
  origin,
  replyCmtId,
  heartCount,
  prevCmtId,
}: cmtItemProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(heartCount);
  const [replyShow, setReplyShow] = useState(false);
  const [replyData, setReplyData] = useState<commentType[]>();
  const setCmtReply = useSetRecoilState(cmtReplyAtom);

  useEffect(() => {
    if (origin) {
      API({
        method: "get",
        url: `/feed-comment-reply/${feedId}/${cmtData.feedCommentId}`,
      }).then((res) => {
        console.log(res.data);
        setReplyData(res.data);
      });
      API({
        method: "get",
        url: `/feed-comment/${feedId}/valid/${cmtData.feedCommentId}`,
      }).then((res) => {
        setLiked(res.data.isTrue);
      });
    } else {
      API({
        method: "get",
        url: `/feed-comment-reply/${feedId}/${prevCmtId}/valid/${replyCmtId}`,
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
        method: "delete",
        url: origin
          ? `feed-comment/${feedId}/${cmtData.feedCommentId}/like`
          : `/feed-comment-reply/${feedId}/${prevCmtId}/${replyCmtId}/like`,
      }).then(() => {
        setLiked(!liked);
      });
    } else {
      API({
        method: "post",
        url: origin
          ? `feed-comment/${feedId}/${cmtData.feedCommentId}`
          : `/feed-comment-reply/${feedId}/${prevCmtId}/${replyCmtId}`,
      }).then(() => setLiked(!liked));
    }
  };

  useEffect(() => {
    if (liked && heartCount) {
      setLikeCount(heartCount + 1);
    } else {
      setLikeCount(heartCount);
    }
  }, [liked, heartCount]);

  return (
    <S.commentItem>
      <ProfileItem
        profileURL={cmtData.user.profileUrl}
        watched={false}
        width={2.5}
      />
      <S.commentTab>
        <span>
          <b>{cmtData.user.nickName}</b>
        </span>
        <S.commentInfo>{cmtData.modify ? "수정됨 &apos;" : ""}</S.commentInfo>
        <S.commentFlex>
          <S.commentContent>{cmtData.content}</S.commentContent>
          <div>
            <FontAwesomeIcon
              onClick={likeCmt}
              color={liked ? "red" : "black"}
              icon={liked ? fas.faHeart : far.faHeart}
              size="2x"
            />
            <S.heartCount>{likeCount || 0}</S.heartCount>
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
                  replyUserId: cmtData.feedCommentId,
                  replyUserName: cmtData.user.nickName,
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
              cmtData={element}
              feedId={feedId}
              prevCmtId={cmtData.feedCommentId}
              replyCmtId={element.feedCommentReplyId}
              heartCount={element.heartCount}
              key={element.feedCommentId}
            />
          );
        })}
    </S.commentItem>
  );
};

export default CommentItem;
