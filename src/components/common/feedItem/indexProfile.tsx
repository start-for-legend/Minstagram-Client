import styled from "styled-components";
import { useState } from "react";

import FeedModalProfile from "./feedModal/indexProfile";

interface feedItemType {}

export const FeedItemDiv = styled.div<feedItemType>`
  width: 17em;
  height: 17em;
  background-color: #000;
  margin-top: 0.25em;
  cursor: pointer;

  img {
    width: 17em;
    height: 17em;
    object-fit: cover;
  }
`;

const FeedItemProfile = ({
  fileUrls,
  feedId,
}: {
  fileUrls: string;
  feedId: number;
}) => {
  const [feedModal, setFeedModal] = useState(false);

  return (
    <>
      <FeedItemDiv onClick={() => setFeedModal(!feedModal)}>  
        <img src={fileUrls} />
      </FeedItemDiv>
      {feedModal ? (
        <FeedModalProfile
          feedIdProfile={feedId}
          modalState={feedModal}
          setModalState={setFeedModal}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default FeedItemProfile;
