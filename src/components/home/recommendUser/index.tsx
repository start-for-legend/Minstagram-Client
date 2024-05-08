import { useEffect } from "react";

import { API } from "../../../API/API";
import RecUserItem from "./recUserItem";
import * as S from "./style";

interface recUserProps {
  userNickName?: string;
  userName?: string;
  profileUrl?: string;
  userId?: number;
}

const RecommendUser = ({
  profileUrl,
  userId,
  userNickName,
  userName,
}: recUserProps) => {
  useEffect(() => {
    const getRecUser = async () => {
      API({
        method: "get",
        url: `/follow`,
      }).then((res) => console.log(res));
    };
    getRecUser();
  }, []);

  return (
    <S.RecUserContainer>
      <RecUserItem
        id={userId}
        name={userName}
        nickName={userNickName}
        myProfile
      />
      <div>
        <S.RecTitle>회원님을 위한 추천</S.RecTitle>
      </div>
      <RecUserItem nickName="JotChelsea" name="좆첼연구소" />
      <RecUserItem nickName="PyeDakPage" name="폐닭해체쇼" />
      <RecUserItem nickName="Spin_.Kneel" name="빙글빙글 발목쇼" />
      <RecUserItem nickName="Real_madrid" name="축구를 못해" />
    </S.RecUserContainer>
  );
};

export default RecommendUser;
