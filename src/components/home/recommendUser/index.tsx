import { useEffect, useState } from "react";

import { API } from "../../../API/API";
import RecUserItem from "./recUserItem";
import * as S from "./style";
import { userType } from "../../../types/userType";

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
  const [recUsers, setRecUsers] = useState<userType[]>();

  useEffect(() => {
    const getRecUser = async () => {
      API({
        method: "get",
        url: `/follow`,
      }).then((res) => setRecUsers(res.data));
    };
    getRecUser();
  }, []);

  return (
    <S.RecUserContainer>
      <RecUserItem
        id={userId}
        name={userName}
        nickName={userNickName}
        profileUrl={profileUrl}
        myProfile
      />
      <div>
        <S.RecTitle>회원님을 위한 추천</S.RecTitle>
      </div>
      {recUsers?.map((element) => {
        return (
          <RecUserItem
            id={element.userId}
            name={element.name}
            nickName={element.nickName}
            key={element.userId}
            profileUrl={element.profileUrl}
          />
        );
      })}
    </S.RecUserContainer>
  );
};

export default RecommendUser;
