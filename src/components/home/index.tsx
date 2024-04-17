import FeedItem from "./items/feedItem";
import FeedHeader from "./header";
import * as S from "./style";
import RecommendUser from "./recommendUser";

const HomeTab = () => {
  return (
    <S.HomeContainer>
      <S.FeedContainer>
        <FeedHeader />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </S.FeedContainer>
      <RecommendUser />
    </S.HomeContainer>
  );
};

export default HomeTab;
