import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import ProfileItem from "../../home/items/profileItem";
import * as S from "./style";

const CommentItem = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <ProfileItem watched={false} width={2.5} />
      <span>
        <b>JotChelsea</b>
      </span>
      <S.commentContent>씨이이발 ㅋㅋㅋ</S.commentContent>
      <S.commentInfo>수정됨 &apos; 2일</S.commentInfo>
    </>
  );
};

export default CommentItem;
