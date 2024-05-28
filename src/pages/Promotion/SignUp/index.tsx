import axios from "axios";
import { useEffect, useState } from "react";

import * as S from "./style";

const SignUpForm = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [phoneVerified, setPhoneVerified] = useState(false);
  const [phoneNum, setPhoneNum] = useState<number | undefined>();
  const [verifyCode, setVerifyCode] = useState<number | null>();
  const [name, setName] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [rePw, setRePw] = useState<string>("");
  const [samePwState, setSamePwState] = useState(false);

  useEffect(() => {
    if ((pw === rePw && rePw) || !rePw) {
      setSamePwState(true);
    } else {
      setSamePwState(false);
    }
  }, [pw, rePw]);

  const phoneOnChange = (e: any) => {
    const curPhoneNum = e.target.value;
    if (curPhoneNum.length <= 0) {
      setPhoneNum(undefined);
    } else if (curPhoneNum.length > 11) {
      setPhoneNum(phoneNum);
    } else {
      setPhoneNum(curPhoneNum);
    }
  };

  const verifyPhoneReq = async () => {
    await axios({
      method: "post",
      url: `${baseUrl}/user/auth`,
      data: { phone: phoneNum },
    })
      .then(() => {
        alert("문자가 발송되었습니다.");
      })
      .catch((e) => console.log(e));
  };

  const verifyPhone = async () => {
    await axios({
      method: "post",
      url: `${baseUrl}/user/check`,
      data: { phone: phoneNum, key: verifyCode },
    })
      .then((e) => {
        setVerifyCode(null);
        setPhoneVerified(true);
      })
      .catch((e) => console.log(e));
  };

  const signUp = () => {
    if (name && nickName && pw === rePw) {
      axios({
        method: "post",
        url: `${baseUrl}/user/new`,
        data: {
          name,
          nickName,
          password: pw,
          phone: phoneNum,
        },
      }).then(() => {
        alert("가입되었습니다!");
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    if (!phoneVerified) {
      setName("");
      setVerifyCode(undefined);
    }
  }, [phoneVerified]);

  return (
    <>
      {phoneVerified ? (
        <>
          <S.IdInput type="number" value={phoneNum} readOnly />
          <S.hiddenInput type="text" />
          <S.IdInput
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="이름"
          />
          <S.IdInput
            value={nickName}
            onChange={(e) => {
              const eName = e.target.value.replace(/[^a-zA-Z0-9_.]/g, "");
              setNickName(eName);
            }}
            type="text"
            pattern="[A-Za-z0-9]+([\_\.])"
            placeholder="계정명 (영어+숫자)"
          />
          <S.PwInput
            samePwState={samePwState}
            onChange={(e) => setPw(e.target.value)}
            type="password"
            placeholder="비밀번호"
            minLength={8}
          />
          <S.PwInput
            samePwState={samePwState}
            onChange={(e) => setRePw(e.target.value)}
            type="password"
            placeholder="비밀번호 재입력"
            minLength={8}
          />
          <S.samePw samePwState={samePwState}>비밀번호가 다릅니다.</S.samePw>
          <S.RegisterBtn onClick={signUp}>회원가입</S.RegisterBtn>
        </>
      ) : (
        <>
          <div>
            <S.PhoneInput
              value={phoneNum}
              onChange={(e) => phoneOnChange(e)}
              type="number"
              placeholder="전화번호"
              maxLength={11}
            />
            <S.VerifyBtn onClick={verifyPhoneReq}>인증</S.VerifyBtn>
          </div>
          <S.IdInput
            type="number"
            value={verifyCode || undefined}
            onChange={(e) => {
              setVerifyCode(Number(e.target.value));
            }}
            placeholder="인증 번호"
          />
          <S.RegisterBtn onClick={verifyPhone}>핸드폰 인증하기</S.RegisterBtn>
        </>
      )}
      <S.OtherTool>
        <hr />
        <span>또는</span>
        <hr />
      </S.OtherTool>
    </>
  );
};

export default SignUpForm;
