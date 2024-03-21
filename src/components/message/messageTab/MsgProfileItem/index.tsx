import { useEffect, useState } from "react";

import * as S from "./style";

const MsgProfileItem = () => {
  const [msgPreview, setMsgPreview] = useState("asdfadsfadsf");
  useEffect(() => {
    if (msgPreview.length > 20) {
      console.log(msgPreview.length);
      setMsgPreview(`${msgPreview.substring(0, 19)}...`);
    }
  }, [msgPreview]);

  return (
    <S.ProfileBox>
      <S.Circle />
      <S.TargetName>수용</S.TargetName>
      <S.MsgPreview>{msgPreview}</S.MsgPreview>
    </S.ProfileBox>
  );
};
export default MsgProfileItem;
