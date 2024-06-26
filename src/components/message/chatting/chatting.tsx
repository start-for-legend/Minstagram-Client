/* eslint no-underscore-dangle: 0 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faImage,
  faPaperPlane,
  faTrashCan,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as StompJs from "@stomp/stompjs";

import { editMsgTypes, msgTypes } from "../../../types/msgType";
import { TokenManager } from "../../../API/tokenManager";
import { API } from "../../../API/API";
import * as S from "./style";
import { userType } from "../../../types/userType";
import ProfileItem from "../../home/items/profileItem";
import { myUserId } from "../../../lib/tokens";

const ChattingTab = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const socketUrl = process.env.REACT_APP_SOCKET_URL;
  const [userInfo, setUserInfo] = useState<userType>();
  const [msgContent, setMsgContent] = useState("");
  const [msgContents, setMsgContents] = useState<msgTypes[]>([]);
  const [editing, setEditing] = useState<editMsgTypes>();
  const [tempMsgContent, setTempMsgContent] = useState("");
  const tokenManager = new TokenManager();
  const client = useRef<any>();
  const params = useParams();
  const {
    state: { chatRoomId, opponentId },
  } = useLocation();
  const myClientId = Number(window.localStorage.getItem(myUserId));

  const getMsg = () => {
    API({
      method: "get",
      url: `${baseUrl}/room/${params.roomId}`,
    })
      .then((res: any) => {
        console.log(res);
        setMsgContents(res.data);
      })
      .catch((err) => console.log(err));
  };

  const chatRecieve = async (msg: any) => {
    if (msg.body) {
      const body = JSON.parse(msg._body);
      setMsgContents((prevMsgContents) => [
        ...prevMsgContents,
        {
          chatterType: myClientId === body.senderId ? "self" : "opponent",
          chat: body.message,
          userId: body.senderId,
          chatTime: new Date(),
        },
      ]);
      console.log(msgContents);
    }
  };

  const getUserInfo = async () => {
    await API({
      method: "get",
      url: `/user/${opponentId}`,
    }).then((res) => setUserInfo(res.data));
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
        client.current.subscribe(`/sub/${params.roomId}`, chatRecieve, {
          Authorization: `Bearer ${tokenManager.accessToken}`,
        });
      };

      client.current.activate();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (params.roomId) {
      getMsg();
      connect();
      getUserInfo();
    }
    return () => client.current.deactivate();
  }, [params.roomId]);

  const changeMsg = () => {
    const copiedArr = msgContents;
    const idx = msgContents.findIndex(
      (content) => content.chatId === editing?.chatId
    );
    copiedArr[idx].chat = msgContent;
    setMsgContents(copiedArr);
  };

  const onMsgSend = (event: any) => {
    if (
      event.nativeEvent.isComposing === false && // 2번 입력되는 거 방지
      event.code === "Enter" &&
      msgContent &&
      editing?.editing
    ) {
      API({
        method: "patch",
        url: `/room/${chatRoomId}/${editing.chatId}`,
        data: {
          content: msgContent,
        },
      }).then(() => {
        changeMsg();
        setEditing({ editing: false, chatId: -1, chat: "" });
        setMsgContent("");
      });
    } else if (
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
          senderId: myClientId,
          message: msgContent,
        }),
      });
      setMsgContent("");
    }
  };

  const chatDelete = (chatId?: number) => {
    API({
      method: "delete",
      url: `/room/${chatRoomId}/${chatId}`,
    }).then(
      (res) =>
        setMsgContents(msgContents.filter((cnt) => cnt.chatId !== chatId)) // 특정 채팅 삭제
    );
  };

  const editMsg = ({ chat, chatId }: { chat: string; chatId?: number }) => {
    if (chatId && chat) {
      setEditing({ editing: true, chatId, chat });
      setTempMsgContent(msgContent);
      setMsgContent(chat);
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
        {/* <FontAwesomeIcon icon={faImage} size="2xl" /> */}
        <FontAwesomeIcon icon={faPaperPlane} size="2xl" />
      </S.ChatWindow>
      {editing?.editing ? (
        <S.Editing>
          메세지 수정 중...
          <FontAwesomeIcon
            icon={faXmarkCircle}
            size="1x"
            onClick={() => {
              setEditing({ editing: false, chatId: -1, chat: "" });
              setMsgContent(tempMsgContent);
            }}
          />
        </S.Editing>
      ) : (
        ""
      )}
      <S.ChatContents>
        {msgContents?.map(({ chat, userId, chatId }) => {
          const meValid = myClientId && userId === myClientId;
          return (
            <S.ChatContainer
              key={chatId}
              chatterType={meValid ? "self" : "opponent"}
            >
              {meValid ? (
                <S.ChatOption>
                  <FontAwesomeIcon
                    onClick={() => chatDelete(chatId)}
                    icon={faTrashCan}
                    size="1x"
                  />
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    size="1x"
                    onClick={() => editMsg({ chat, chatId })}
                  />
                </S.ChatOption>
              ) : (
                ""
              )}
              <S.ChatMsg chatterType={meValid ? "self" : "opponent"}>
                {chat}
              </S.ChatMsg>
            </S.ChatContainer>
          );
        })}
      </S.ChatContents>
      <S.ChatProfile>
        <S.TargetInfo>
          <ProfileItem
            profileURL={userInfo?.profileUrl}
            watched={false}
            width={4}
            marginLeft={1}
            marginTop={1}
          />
          <S.TargetName>{userInfo?.nickName}</S.TargetName>
          <S.Active>{userInfo?.name}</S.Active>
        </S.TargetInfo>
      </S.ChatProfile>
    </S.ChattingTab>
  );
};

export default ChattingTab;
