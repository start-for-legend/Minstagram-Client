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

const NoHomeData = ({ contentType }: { contentType: "comment" | "home" }) => {
  const commentText = "아직 아무런 댓글이 작성되지 않았어요!";
  const homeText = "아직 아무런 글이 올라오지 않았어요!";

  return (
    <NoDataContainer>
      <FontAwesomeIcon icon={faUserSlash} size="3x" />
      <NoDataNotice>
        {contentType === "comment" ? commentText : homeText}
      </NoDataNotice>
    </NoDataContainer>
  );
};

export default NoHomeData;
