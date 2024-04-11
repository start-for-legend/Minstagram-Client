import FeedItem from "./items/feedItem";
import FeedHeader from "./header";
import * as S from "./style";

const HomeTab = () => {
  return (
    <S.HomeContainer>
      <S.FeedContainer>
        <FeedHeader />
        <FeedItem />
      </S.FeedContainer>
      <div />
    </S.HomeContainer>
  );
};

export default HomeTab;
