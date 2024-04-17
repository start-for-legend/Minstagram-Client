import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { searchStateAtom } from "../../recoil/Atoms/atoms";
import Chatting from "../../components/message/chatting";
import MessageTab from "../../components/message/messageTab";
import Sidebar from "../../components/sidebar";
import PageContainer from "../../components/common/pageContainer";

const Message = () => {
  const setSearchState = useSetRecoilState(searchStateAtom);

  useEffect(() => {
    setSearchState(false);
  }, []);

  return (
    <>
      <Sidebar />
      <PageContainer>
        <MessageTab />
        <Chatting />
      </PageContainer>
    </>
  );
};
export default Message;
