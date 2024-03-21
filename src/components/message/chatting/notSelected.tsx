import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

import * as S from "./style";

const NotSelected = () => {
  return (
    <S.NotSelected>
      <S.NotSelectedSVG>
        <FontAwesomeIcon icon={faMessage} size="4x" />
      </S.NotSelectedSVG>
      <h3>내 메세지</h3>
      <div>친구나 그룹에 비공개 사진과 메시지를 보내보세요</div>
      <S.NotSelectedBtn>메세지 보내기</S.NotSelectedBtn>
    </S.NotSelected>
  );
};

export default NotSelected;
