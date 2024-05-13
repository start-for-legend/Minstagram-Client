import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";

import { API } from "../../../API/API";
import NotSelected from "./notSelected";
import ChattingTab from "./chatting";
import * as S from "./style";
import { userResponseAtom } from "../../../recoil/Atoms/atoms";

const Chatting = () => {
  const params = useParams();
  const userResponse = useRecoilValue(userResponseAtom);

  useEffect(() => {
    console.log(userResponse);
  }, [userResponse]);

  return (
    <S.ChattingContainer selected={!!params.userId}>
      {params.roomId ? <ChattingTab /> : <NotSelected />}
    </S.ChattingContainer>
  );
};

export default Chatting;
