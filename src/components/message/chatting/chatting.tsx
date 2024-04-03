import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { CompatClient, Stomp } from "@stomp/stompjs";
import { useParams } from "react-router-dom";
import * as StompJs from "@stomp/stompjs";

import { msgTypes } from "../../../types/msgType";
import { TokenManager } from "../../../API/tokenManager";
import { API } from "../../../API/API";
import * as S from "./style";

const ChattingTab = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const socketUrl = process.env.REACT_APP_SOCKET_URL;
  const [msgContent, setMsgContent] = useState("");
  const [msgContents, setMsgContents] = useState<msgTypes[]>([]);
  const [msg, setMsg] = useState();
  const params = useParams();
  const tokenManager = new TokenManager();
  const client = useRef<any>();

  const getMsg = () => {
    API({
      method: "get",
      url: `${baseUrl}/room/${params.roomId}`,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const subscribe = () => {
    client.current.subscribe(`/sub/${params.roomId}`, getMsg);
  };

  const msgConnect = () => {
    client.current = new StompJs.Client({
      brokerURL: socketUrl,
      connectHeaders: {
        Authorization: `Bearer ${tokenManager.accessToken}`,
      },
      onConnect: () => {
        subscribe();
      },
      debug: (str) => {
        console.log(str);
      },
      onStompError: (err) => {
        console.log(err);
      },
      reconnectDelay: 1000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });
    client.current.activate();
  };

  useEffect(() => {
    msgConnect();

    return () => client.current.deactivate();
  }, [params]);

  const onMsgSend = (event: any) => {
    if (
      event.nativeEvent.isComposing === false && // 2번 입력되는 거 방지
      event.code === "Enter" &&
      msgContent
    ) {
      client.current.publish({
        destination: `/pub/chat/${params.roomId}`,
        body: JSON.stringify({
          chatroomId: params.roomId,
          senderId: 2,
          message: msgContent,
        }),
      });
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
