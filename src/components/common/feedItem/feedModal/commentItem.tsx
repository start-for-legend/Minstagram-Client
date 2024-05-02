import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import ProfileItem from "../../../home/items/profileItem";
import * as S from "./style";
import { commentType } from "../../../../types/commentType";

const CommentItem = ({
  content,
  feedCommentId,
  heartCount,
  modify,
  user,
}: commentType) => {
  

  const [liked, setLiked] = useState(false);
  return (
    <S.commentItem>
      <ProfileItem watched={false} width={2.5} />
      <S.commentTab>
        <span>
          <b>{user.nickName}</b>
        </span>
        <S.commentInfo>{modify ? "수정됨 &apos;" : ""}</S.commentInfo>
        <S.commentFlex>
          <S.commentContent>{content}</S.commentContent>
          <div>
            <FontAwesomeIcon
              onClick={() => setLiked(!liked)}
              color={liked ? "red" : "black"}
              icon={liked ? fas.faHeart : far.faHeart}
              size="2x"
            />
            <S.heartCount>{heartCount}</S.heartCount>
          </div>
        </S.commentFlex>
      </S.commentTab>
    </S.commentItem>
  );
};

export default CommentItem;
