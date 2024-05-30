import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import ProfileItem from "../../home/items/profileItem";
import * as S from "./style";
import { reelsCmtItemTypes } from "../../../types/reelsType";
import { API } from "../../../API/API";

const CommentItem = ({
  data: { author, comment, heartCount, leelsCommentId, modify },
  reelsId,
}: reelsCmtItemTypes) => {
  const [liked, setLiked] = useState(false);
  const [countHeart, setCountHeart] = useState(heartCount || 0);
  const isLike = liked ? 1 : 0;

  const onLikeClick = async () => {
    API({
      method: liked ? "put" : "post",
      url: `/leels-comment/${reelsId}/${leelsCommentId}`,
    }).then(() => setLiked(!liked));
  };

  const getValid = async () => {
    await API({
      method: "get",
      url: `leels-comment/${reelsId}/valid/${leelsCommentId}`,
    }).then((res) => {
      setLiked(res.data.isTrue);
      if (res.data.isTrue && countHeart) setCountHeart(countHeart - 1);
    });
  };

  useEffect(() => {
    if (leelsCommentId) getValid();
  }, [leelsCommentId]);

  return (
    <S.commentItemBox>
      <div>
        <ProfileItem marginLeft={1} watched={false} width={2.5} />
        <span>
          <b>{author?.nickName}</b>
        </span>
        <S.commentContent>{comment}</S.commentContent>
      </div>
      <S.cmtLike>
        <FontAwesomeIcon
          icon={liked ? fas.faHeart : far.faHeart}
          color={liked ? "red" : "black"}
          onClick={onLikeClick}
          size="xl"
        />
        <div>{countHeart + isLike}</div>
      </S.cmtLike>
    </S.commentItemBox>
  );
};

export default CommentItem;
