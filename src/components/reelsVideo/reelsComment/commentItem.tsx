import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import ProfileItem from "../../home/items/profileItem";
import * as S from "./style";
import { reelsCmtInterface } from "../../../types/reelsType";

const CommentItem = ({
  author,
  comment,
  heartCount,
  leelsCommentId,
  modify,
}: reelsCmtInterface) => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    console.log("ㅁㄴㅇㄹ");
    console.log(author);
  }, [author]);

  return (
    <div>
      <ProfileItem watched={false} width={2.5} />
      <span>
        <b>{author?.nickName}</b>
      </span>
      <S.commentContent>{comment}</S.commentContent>
      <S.commentInfo>수정됨 &apos; 2일</S.commentInfo>
    </div>
  );
};

export default CommentItem;
