import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./style";

interface msgProfileItemProps {
  userId: number;
}

const MsgProfileItem = ({ userId }: msgProfileItemProps) => {
  const [msgPreview, setMsgPreview] = useState("asdfadsfadsf");
  const navigate = useNavigate();

  useEffect(() => {
    if (msgPreview.length > 20) {
      console.log(msgPreview.length);
      setMsgPreview(`${msgPreview.substring(0, 19)}...`);
    }
  }, [msgPreview]);

  return (
    <S.ProfileBox onClick={() => navigate(`/message/${userId}`)}>
      <S.Circle />
      <S.TargetName>수용</S.TargetName>
      <S.MsgPreview>{msgPreview}</S.MsgPreview>
    </S.ProfileBox>
  );
};
export default MsgProfileItem;
