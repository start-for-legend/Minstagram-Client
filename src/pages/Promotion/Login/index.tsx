import axios from "axios";
import { useState } from "react";

import * as S from "./style";

const LoginForm = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [phone, setPhone] = useState<string>();
  const [password, setPassword] = useState<string>();

  const login = async () => {
    if (phone && password) {
      await axios({
        method: "post",
        url: `${baseUrl}/user`,
        data: {
          phone,
          password,
        },
      })
        .then((res) => {
          localStorage.setItem("mst-accessToken", res.data.accessToken);
          localStorage.setItem("mst-expiredAt", res.data.expiredAt);
          window.location.href = "/home";
        })
        .catch((e) => {
          if ((e.response.status === 403, 404)) {
            alert("전화번호 혹은 비밀번호가 틀립니다");
          } else {
            alert("오류가 발생했습니다");
          }
        });
    }
  };

  return (
    <>
      <S.IdInput
        type="text"
        onChange={(e) => setPhone(e.target.value)}
        placeholder="전화번호 (예:01012341234)"
      />
      <S.IdInput
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <S.LoginBtn onClick={login}>로그인</S.LoginBtn>
      <S.OtherTool>
        <hr />
        <span>또는</span>
        <hr />
      </S.OtherTool>
    </>
  );
};

export default LoginForm;
