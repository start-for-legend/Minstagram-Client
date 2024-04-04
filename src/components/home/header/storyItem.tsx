import { storyType } from "../../../types/storyType";
import * as S from "./style";

const StoryItem = (props: storyType) => {
  const { userName } = props;
  return (
    <S.profile>
      <S.profileImg {...props} />
      <S.profileName>{userName}</S.profileName>
    </S.profile>
  );
};

export default StoryItem;
