import { useState } from "react";

import StoryItem from "./storyItem";
import * as S from "./style";

const FeedHeader = () => {
  const [watched, setWatched] = useState<boolean>(false);
  return (
    <S.feedHeader>
      <StoryItem userName="나다" watched={watched} />
      <StoryItem userName="나다" watched={watched} />
      <StoryItem userName="나다" watched={watched} />
      <StoryItem userName="나다" watched={watched} />
      <StoryItem userName="나다" watched={watched} />
      <StoryItem userName="나다" watched={watched} />
      <StoryItem userName="나다" watched={watched} />
      <StoryItem userName="나다" watched={watched} />
      <StoryItem userName="나다" watched={watched} />
      <StoryItem userName="나다" watched={watched} />
      <StoryItem userName="나다" watched={watched} />
      <StoryItem userName="나다" watched={watched} />
      <StoryItem userName="썅녠" watched={watched} />
    </S.feedHeader>
  );
};

export default FeedHeader;
