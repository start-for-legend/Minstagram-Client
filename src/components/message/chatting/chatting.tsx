import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faInfoCircle,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import * as S from "./style";

const ChattingTab = () => {
  return (
    <S.ChattingTab>
      <S.ChatWindow>
        <S.ChatInput type="text" placeholder="메세지 입력..." />
        <FontAwesomeIcon icon={faImage} size="2xl" />
        <FontAwesomeIcon icon={faPaperPlane} size="2xl" />
      </S.ChatWindow>
      <S.ChatContents>
        <S.ChatMsg chatterType="self">안녕하세요</S.ChatMsg>
        <S.ChatMsg chatterType="self">안녕하세요</S.ChatMsg>
        <S.ChatMsg chatterType="opponent">안녕하세요</S.ChatMsg>
      </S.ChatContents>
      <S.ChatProfile>
        <S.TargetInfo>
          <S.ProfilePic />
          <S.TargetName>이름</S.TargetName>
          <S.Active>활동 중</S.Active>
        </S.TargetInfo>
      </S.ChatProfile>
    </S.ChattingTab>
  );
};

export default ChattingTab;
