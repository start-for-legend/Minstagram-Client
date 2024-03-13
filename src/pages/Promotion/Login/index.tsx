import { useState } from "react";
import { LightLogo } from "../../../assets/files";
import * as S from "./style";

const LoginForm = () => {
  const [loginState, setLoginState] = useState(true);
  return (
    <>
      <S.LoginForm>
        {loginState ? (
          <S.LoginBox>
            <LightLogo />
            <S.IdInput
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <S.IdInput type="password" placeholder="비밀번호" />
            <S.LoginBtn>로그인</S.LoginBtn>
            <S.OtherTool>
              <hr />
              <span>또는</span>
              <hr />
            </S.OtherTool>
            <S.AnyBox>대충 위치 맞추려고 잡는 박스</S.AnyBox>
            <S.ForgetPw>비밀번호를 잊으셨나요?</S.ForgetPw>
          </S.LoginBox>
        ) : (
          <S.LoginBox>
            <LightLogo />
            <S.IdInput type="text" placeholder="전화번호 혹은 이메일" />
            <S.IdInput type="password" placeholder="비밀번호" />
            <S.IdInput type="password" placeholder="비밀번호 재입력" />
            <S.LoginBtn>회원가입</S.LoginBtn>
            <S.AnyBox>대충 위치 맞추려고 잡는 박스</S.AnyBox>
          </S.LoginBox>
        )}
        <S.RegisterBox>
          계정이 없나요?
          <S.Register onClick={() => setLoginState(!loginState)}>
            가입하기
          </S.Register>
        </S.RegisterBox>
      </S.LoginForm>
    </>
  );
};

export default LoginForm;
