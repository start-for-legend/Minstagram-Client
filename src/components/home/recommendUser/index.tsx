import RecUserItem from "./recUserItem";
import * as S from "./style";

const RecommendUser = () => {
  return (
    <S.RecUserContainer>
      <RecUserItem id="John_Sana_704" name="김민재" myProfile />
      <div>
        <S.RecTitle>회원님을 위한 추천</S.RecTitle>
      </div>
      <RecUserItem id="JotChelsea" name="좆첼연구소" />
      <RecUserItem id="PyeDakPage" name="폐닭해체쇼" />
      <RecUserItem id="Spin_.Kneel" name="빙글빙글 발목쇼" />
      <RecUserItem id="Real_madrid" name="축구를 못해" />
    </S.RecUserContainer>
  );
};

export default RecommendUser;
