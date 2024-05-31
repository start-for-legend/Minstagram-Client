import { useNavigate } from "react-router-dom";

import { SIUU } from "../../assets/files";
import * as S from "./style";

const Exception = () => {
  const navigate = useNavigate();

  return (
    <S.Exception>
      <SIUU />
      <S.ExceptionTitle>404 Not Found!</S.ExceptionTitle> 페이지가 존재하지
      않거나, 사용할 수 없는 페이지입니다. 입력하신 주소가 정확한지 다시 한 번
      확인해주세요.
      <S.HomeBtn onClick={() => navigate("/home")}>홈으로 돌아가기</S.HomeBtn>
      <S.HomeBtn onClick={() => navigate(-1)}>이전으로 돌아가기</S.HomeBtn>
    </S.Exception>
  );
};

export default Exception;
