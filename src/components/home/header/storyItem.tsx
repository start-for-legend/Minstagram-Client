import { useState } from "react";

import ProfileItem from "../items/profileItem";
import * as S from "./style";

const StoryItem = () => {
  const [watched, setWatched] = useState(false);
  return (
    <S.profile>
      <ProfileItem width={4} watched={watched} marginLeft={1} />
      <S.profileName>asdf</S.profileName>
    </S.profile>
  );
};

export default StoryItem;
