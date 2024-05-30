import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileItem from "../items/profileItem";
import * as S from "./style";

const StoryItem = () => {
  const [watched, setWatched] = useState(false);
  const navigate = useNavigate();

  return (
    <S.profile onClick={() => navigate("/story")}>
      <ProfileItem width={4} watched={watched} marginLeft={1} />
      <S.profileName>스토리</S.profileName>
    </S.profile>
  );
};

export default StoryItem;
