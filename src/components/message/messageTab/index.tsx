import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  faChevronDown,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { API } from "../../../API/API";
import MsgProfileItem from "./MsgProfileItem";
import { profileTypes } from "../../../types/msgType";
import * as S from "./style";
import { roomsAtom, userResponseAtom } from "../../../recoil/Atoms/atoms";

const MessageTab = () => {
  const [rooms, setRooms] = useRecoilState(roomsAtom);
  const navigate = useNavigate();
  const userResponse = useRecoilValue(userResponseAtom);

  const getRooms = async () => {
    await API({
      method: "get",
      url: "/room",
    }).then((res) => {
      setRooms(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <S.msgTab>
      <S.myProfile>
        <span>{userResponse?.nickName || "undefined"}</span>
        <FontAwesomeIcon icon={faChevronDown} size="2x" />
        <FontAwesomeIcon
          icon={faPenToSquare}
          size="2x"
          onClick={() => navigate("/message")}
        />
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
