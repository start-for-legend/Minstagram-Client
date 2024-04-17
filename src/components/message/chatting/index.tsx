import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { API } from "../../../API/API";
import NotSelected from "./notSelected";
import ChattingTab from "./chatting";
import * as S from "./style";

const Chatting = () => {
  const params = useParams();
  const [userId, setUserId] = useState<number>(0);

  const getUserInfo = () => {
    API({
      method: "get",
      url: "/user",
    }).then((res) => setUserId(res.data.userId));
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <S.ChattingContainer selected={!!params.userId}>
      {params.userId ? <ChattingTab myUserId={userId} /> : <NotSelected />}
    </S.ChattingContainer>
  );
};

export default Chatting;
