import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import ProfileItem from "../profileItem";
import * as S from "./style";

const CommentItem = () => {
  const [liked, setLiked] = useState(false);
  return (
    <S.commentItem>
      <ProfileItem watched={false} width={2.5} />
      <S.commentTab>
        <span>
          <b>JotChelsea</b>
        </span>
        <S.commentContent>
          이 캐릭터 하나면 니네가 빠는 캐릭터 몰살 가능함 ㅋㅋㅋㅋ 「무량공처」
          무하한의 안쪽인 이 영역은 고죠 사토루 본인을 제외하고 모든 대상이
          행하는 정신 활동을 무한한 반복작업으로 만듬. 영역에 잠시라도 발을
          들이는 순간 뇌가 블루스크린 상태가 되어 아무 것도 할 수 없으며, 이
          상태가 조금만 길게 이어져도 영구적인 뇌 손상으로 폐인이 되어 버림.
        </S.commentContent>
        <FontAwesomeIcon
          onClick={() => setLiked(!liked)}
          color={liked ? "red" : "black"}
          icon={liked ? fas.faHeart : far.faHeart}
          size="2x"
        />
        <br />
        <S.commentInfo>수정됨 &apos; 2일</S.commentInfo>
      </S.commentTab>
    </S.commentItem>
  );
};

export default CommentItem;
