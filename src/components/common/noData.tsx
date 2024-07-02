import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const NoDataContainer = styled.div`
  height: 30em;
  text-align: center;
  margin-top: 3em;
`;

export const NoDataNotice = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 2rem;
`;

const NoHomeData = () => {
  return (
    <NoDataContainer>
      <FontAwesomeIcon icon={faUserSlash} size="3x" />
      <NoDataNotice>아직 아무런 글이 올라오지 않았어요!</NoDataNotice>
    </NoDataContainer>
  );
};

export default NoHomeData;
