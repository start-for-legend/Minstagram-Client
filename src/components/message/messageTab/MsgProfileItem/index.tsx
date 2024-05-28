import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { profileTypes } from "../../../../types/msgType";
import * as S from "./style";
import ProfileItem from "../../../home/items/profileItem";

const MsgProfileItem = ({
  opponentId,
  opponentNickName,
  opponentProfileUrl,
  chatRoomId,
  lastMessage,
  lastMessageTime,
}: profileTypes) => {
  const [msgPreview, setMsgPreview] = useState(lastMessage);
  const navigate = useNavigate();

  useEffect(() => {
    if (lastMessage && lastMessage.length > 20) {
      console.log(lastMessage.length);
      setMsgPreview(`${lastMessage.substring(0, 19)}...`);
    } else if (!msgPreview) {
      setMsgPreview("새로운 대화를 나눠보세요!");
    }
  }, [lastMessage]);

  return (
    <S.ProfileBox
      onClick={() =>
        navigate(`/message/${chatRoomId}`, {
          state: { chatRoomId, opponentId },
        })
      }
    >
      <ProfileItem watched={false} width={4} profileURL={opponentProfileUrl} />
      <S.TargetName>{opponentNickName}</S.TargetName>
      <S.MsgPreview>{msgPreview}</S.MsgPreview>
    </S.ProfileBox>
  );
};
export default MsgProfileItem;
