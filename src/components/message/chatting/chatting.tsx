import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as StompJs from "@stomp/stompjs";

import { msgTypes } from "../../../types/msgType";
import { TokenManager } from "../../../API/tokenManager";
import { API } from "../../../API/API";
import * as S from "./style";

type msgProps = {
  myUserId: number;
};

const ChattingTab = ({ myUserId }: msgProps) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const socketUrl = process.env.REACT_APP_SOCKET_URL;
  const [msgContent, setMsgContent] = useState("");
  const [msgContents, setMsgContents] = useState<msgTypes[]>([]);
  const params = useParams();
  const tokenManager = new TokenManager();
  const client = useRef<any>();
  const {
    state: { chatRoomId, opponentId },
  } = useLocation();

  const getMsg = () => {
    API({
      method: "get",
      url: `${baseUrl}/room/${chatRoomId}`,
    })
      .then((res: any) => {
        console.log(res);
        setMsgContents(res.data);
      })
      .catch((err) => console.log(err));
  };

  const connect = () => {
    try {
      client.current = new StompJs.Client({
        brokerURL: socketUrl,
        connectHeaders: {
          Authorization: `Bearer ${tokenManager.accessToken}`,
        },
        disconnectHeaders: {
          Authorization: `Bearer ${tokenManager.accessToken}`,
        },
        debug: (str) => {
          console.log(str);
        },
        reconnectDelay: 5000, // 자동 재 연결
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });

      client.current.onConnect = (res: any) => {
        console.log(res);
        client.current.subscribe(
          `/sub/${chatRoomId}`,
          () => console.log("connected"),
          {
            Authorization: `Bearer ${tokenManager.accessToken}`,
          }
        );
      };

      client.current.activate();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMsg();
    connect();

    return () => client.current.deactivate();
  }, []);
  useEffect(() => {
    console.log(msgContents);
  }, [msgContents]);

  const onMsgSend = (event: any) => {
    if (
      event.nativeEvent.isComposing === false && // 2번 입력되는 거 방지
      event.code === "Enter" &&
      msgContent
    ) {
      client.current.publish({
        destination: `/pub/chat`,
        headers: {
          Authorization: `Bearer ${tokenManager.accessToken}`,
        },
        body: JSON.stringify({
          chatRoomId,
          senderId: 2,
          message: msgContent,
        }),
      });
      setMsgContents([
        ...msgContents,
        {
          chatterType: "self",
          chat: msgContent,
          userId: myUserId,
          chatTime: new Date(),
        },
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
        {msgContents?.map(({ chat, userId, chatId }) => {
          return (
            <S.ChatMsg
              chatterType={userId === myUserId ? "self" : "opponent"}
              key={chatId}
            >
              {/* 여기 바꿔야함 ㅇㅇ */}
              {chat}
            </S.ChatMsg>
          );
        })}
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
