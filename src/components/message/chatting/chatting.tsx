import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { msgTypes } from "../../../types/msgType";
import * as S from "./style";

const ChattingTab = () => {
  const [msgContent, setMsgContent] = useState("");
  const [msgContents, setMsgContents] = useState<msgTypes[]>([]);

  const onMsgSend = (event: any) => {
    if (
      event.nativeEvent.isComposing === false && // 2번 입력되는 거 방지
      event.code === "Enter" &&
      msgContent
    ) {
      console.log(msgContent);
      setMsgContents([
        { chatterType: "self", message: msgContent, msgId: 1 },
        ...msgContents,
      ]);
      setMsgContent("");
    }
  };

  return (
    <S.ChattingTab>
      <S.ChatWindow>
        <S.ChatInput
          onChange={(e) => setMsgContent(e.target.value)}
          value={msgContent}
          type="text"
          placeholder="메세지 입력..."
          onKeyUp={(e) => onMsgSend(e)} // onKeyPress 지양하기
        />
        <FontAwesomeIcon icon={faImage} size="2xl" />
        <FontAwesomeIcon icon={faPaperPlane} size="2xl" />
      </S.ChatWindow>
      <S.ChatContents>
        {msgContents?.map(({ chatterType, message, msgId }) => {
          return (
            <S.ChatMsg chatterType={chatterType} key={msgId}>
              {message}
            </S.ChatMsg>
          );
        })}
        <S.ChatMsg chatterType="opponent">ㄴㅁㅇㄹ</S.ChatMsg>
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
