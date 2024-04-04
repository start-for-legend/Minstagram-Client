import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  faChevronDown,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { API } from "../../../API/API";
import MsgProfileItem from "./MsgProfileItem";
import { profileTypes } from "../../../types/msgType";
import * as S from "./style";

const MessageTab = () => {
  const [rooms, setRooms] = useState<profileTypes[]>();

  const getRooms = async () => {
    await API({
      method: "get",
      url: "/room",
    }).then((res) => setRooms(res.data));
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <S.msgTab>
      <S.myProfile>
        <span>John_Sana_06</span>
        <FontAwesomeIcon icon={faChevronDown} size="2x" />
        <FontAwesomeIcon icon={faPenToSquare} size="2x" />
      </S.myProfile>
      <S.msgHelp>메세지</S.msgHelp>
      <S.msgProfile>
        {rooms?.map((props: any) => {
          return <MsgProfileItem {...props} key={props.chatRoomId} />;
        })}
      </S.msgProfile>
    </S.msgTab>
  );
};

export default MessageTab;
