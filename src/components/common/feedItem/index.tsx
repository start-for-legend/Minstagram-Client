import styled from "styled-components";
import { useState } from "react";

import FeedModal from "./feedModal";
import { feedType } from "../../../types/feedType";

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

const FeedItem = (element: feedType) => {
  const [feedModal, setFeedModal] = useState(false);

  return (
    <>
      <FeedItemDiv onClick={() => setFeedModal(!feedModal)}>
        {/* eslint-disable-next-line */}
        <img src={element.fileUrls[0]} />
      </FeedItemDiv>
      {feedModal ? (
        <FeedModal
          element={element}
          modalState={feedModal}
          setModalState={setFeedModal}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default FeedItem;
