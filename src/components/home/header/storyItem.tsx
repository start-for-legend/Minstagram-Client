import { useState } from "react";

import ProfileItem from "../items/profileItem";
import * as S from "./style";

const StoryItem = () => {
  const [watched, setWatched] = useState(false);
  return (
    <S.profile>
      <ProfileItem width={4} watched={watched} />
      <S.profileName>asdf</S.profileName>
    </S.profile>
  );
};

export default StoryItem;
