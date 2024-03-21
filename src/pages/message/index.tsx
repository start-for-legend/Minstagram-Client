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

  const profileExamples: profileTypes[] = [
    {
      userId: 1,
    },
    {
      userId: 2,
    },
    {
      userId: 3,
    },
    {
      userId: 4,
    },
    {
      userId: 5,
    },
    {
      userId: 6,
    },
    {
      userId: 7,
    },
    {
      userId: 8,
    },
  ];

  useEffect(() => {
    setSearchState(false);
  }, []);

  return (
    <>
      <Sidebar />
      <S.MsgContainer>
        <MessageTab profiles={profileExamples} />
        <Chatting />
      </S.MsgContainer>
    </>
  );
};
export default Message;
