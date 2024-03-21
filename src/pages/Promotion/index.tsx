import Footer from "../../components/footer";
import LoginForm from "./Login";
import { SIUU } from "../../assets/files";
import * as S from "./style";

const Promotion = () => {
  return (
    <S.PromotionContainer>
      <S.Minstagram>Minstagram</S.Minstagram>
      <S.PromotionBox>
        <SIUU height="37em" />
        <LoginForm />
      </S.PromotionBox>
      <Footer />
    </S.PromotionContainer>
  );
};

export default Promotion;
