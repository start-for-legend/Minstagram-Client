import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

import * as S from "./style";
import FollowModal from "../../profile/header/followModal";
import { myUserId } from "../../../lib/tokens";

const NotSelected = () => {
  const [followModal, setFollowModal] = useState(false);
  const userId = Number(window.localStorage.getItem(myUserId));
  const followState = "chatting";

  return (
    <S.NotSelected>
      <S.NotSelectedSVG>
        <FontAwesomeIcon icon={faMessage} size="4x" />
      </S.NotSelectedSVG>
      <h3>내 메세지</h3>
      <div>친구나 그룹에 비공개 사진과 메시지를 보내보세요</div>
      <S.NotSelectedBtn onClick={() => setFollowModal(!followModal)}>
        채팅방 만들기
      </S.NotSelectedBtn>
      <FollowModal
        followModal={followModal}
        setFollowModal={setFollowModal}
        id={userId}
        followState={followState}
      />
    </S.NotSelected>
  );
};

export default NotSelected;
