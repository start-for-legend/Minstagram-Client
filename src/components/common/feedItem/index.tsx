import styled from "styled-components";
import { useState } from "react";

import FeedModal from "./feedModal";

export const TestFeed = styled.div`
  width: 17em;
  height: 17em;
  background-color: #000;
  margin-top: 1em;
  cursor: pointer;
`;

const FeedItem = () => {
  const [feedModal, setFeedModal] = useState(false);
  return (
    <TestFeed onClick={() => setFeedModal(!feedModal)}>
      {feedModal ? (
        <FeedModal modalState={feedModal} setModalState={setFeedModal} />
      ) : (
        ""
      )}
    </TestFeed>
  );
};
export default FeedItem;
