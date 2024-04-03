import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { searchStateAtom } from "../../recoil/Atoms/atoms";
import Chatting from "../../components/message/chatting";
import MessageTab from "../../components/message/messageTab";
import Sidebar from "../../components/sidebar";
import { profileTypes } from "../../types/msgType";
import * as S from "./style";

const Message = () => {
  const setSearchState = useSetRecoilState(searchStateAtom);
  useEffect(() => {
    setSearchState(false);
  }, []);

  return (
    <>
      <Sidebar />
      <S.MsgContainer>
        <MessageTab />
        <Chatting />
      </S.MsgContainer>
    </>
  );
};
export default Message;
