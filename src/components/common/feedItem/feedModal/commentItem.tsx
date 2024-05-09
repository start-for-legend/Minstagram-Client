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
}

const CommentItem = ({ cmtData, feedId }: cmtItemProps) => {
  const [liked, setLiked] = useState(false);
  const [replyShow, setReplyShow] = useState(false);
  const [replyData, setReplyData] = useState<commentType[]>();
  const setCmtReply = useSetRecoilState(cmtReplyAtom);

  useEffect(() => {
    API({
      method: "get",
      url: `/feed-comment-reply/${feedId}/${cmtData.feedCommentId}`,
    }).then((res) => {
      console.log(res.data);
      setReplyData(res.data);
    });
  }, []);

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
              onClick={() => setLiked(!liked)}
              color={liked ? "red" : "black"}
              icon={liked ? fas.faHeart : far.faHeart}
              size="2x"
            />
            <S.heartCount>{cmtData.heartCount}</S.heartCount>
          </div>
        </S.commentFlex>
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
      </S.commentTab>
      {replyShow &&
        replyData?.map((element) => {
          return (
            <S.commentItem key={element.feedCommentId}>
              <ProfileItem
                watched={false}
                profileURL={cmtData.user.profileUrl}
                width={2.5}
              />
              <S.commentTab>
                <span>
                  <b>{cmtData.user.nickName}</b>
                </span>
                <S.commentInfo>
                  {cmtData.modify ? "수정됨 &apos;" : ""}
                </S.commentInfo>
                <S.commentFlex>
                  <S.commentContent>{cmtData.content}</S.commentContent>
                  <div>
                    <FontAwesomeIcon
                      onClick={() => setLiked(!liked)}
                      color={liked ? "red" : "black"}
                      icon={liked ? fas.faHeart : far.faHeart}
                      size="2x"
                    />
                    <S.heartCount>{cmtData.heartCount}</S.heartCount>
                  </div>
                </S.commentFlex>
              </S.commentTab>
            </S.commentItem>
          );
        })}
    </S.commentItem>
  );
};

export default CommentItem;
