import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { searchStateAtom, userResponseAtom } from "../../recoil/Atoms/atoms";
import Chatting from "../../components/message/chatting";
import MessageTab from "../../components/message/messageTab";
import Sidebar from "../../components/sidebar";
import PageContainer from "../../components/common/pageContainer";
import { API } from "../../API/API";

const Message = () => {
  const setSearchState = useSetRecoilState(searchStateAtom);
  const setUserResponse = useSetRecoilState(userResponseAtom);

  const getUserResponse = async () => {
    await API({
      method: "get",
      url: "/user",
    }).then((res) => setUserResponse(res.data));
  };

  useEffect(() => {
    setSearchState(false);
    getUserResponse();
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
