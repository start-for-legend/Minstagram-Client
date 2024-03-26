import * as S from "./style";

const LoginForm = () => {
  return (
    <>
      <S.IdInput type="text" placeholder="전화번호" />
      <S.IdInput type="password" placeholder="비밀번호" />
      <S.LoginBtn>로그인</S.LoginBtn>
      <S.OtherTool>
        <hr />
        <span>또는</span>
        <hr />
      </S.OtherTool>
    </>
  );
};

export default LoginForm;
