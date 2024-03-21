import { useParams } from "react-router-dom";

import * as S from "./style";
import NotSelected from "./notSelected";
import ChattingTab from "./chatting";

const Chatting = () => {
  const params = useParams();
  return (
    <S.ChattingContainer selected={!!params.userId}>
      {params.userId ? <ChattingTab /> : <NotSelected />}
    </S.ChattingContainer>
  );
};

export default Chatting;
