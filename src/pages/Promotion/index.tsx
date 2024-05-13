import { useEffect, useState } from "react";

import Footer from "../../components/footer";
import LoginForm from "./Login";
import SignUpForm from "./SignUp";
import { LightLogo, SIUU } from "../../assets/files";
import * as S from "./style";

const Promotion = () => {
  const [loginState, setLoginState] = useState(false);
  const isLogIn = Boolean(window.localStorage.getItem("mst-accessToken"));

  useEffect(() => {
    if (isLogIn) {
      console.log("it is Logined");
    }
  }, []);

  return (
    <S.PromotionContainer>
      <S.Minstagram>Minstagram</S.Minstagram>
      <S.PromotionBox>
        <SIUU height="37em" />
        <S.AccountBox>
          <LightLogo height="10em" />
          {loginState ? <SignUpForm /> : <LoginForm />}
          계정이 없나요?
          <S.Register onClick={() => setLoginState(!loginState)}>
            가입하기
          </S.Register>
        </S.AccountBox>
      </S.PromotionBox>
      <Footer />
    </S.PromotionContainer>
  );
};

export default Promotion;
