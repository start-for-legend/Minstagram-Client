import styled from "styled-components";
import { useState } from "react";
import ReactPlayer from "react-player";

import FeedModalProfile from "./feedModal/indexProfile";
import { curTabType } from "../../../types/profileType";

interface feedItemType {}

export const FeedItemDiv = styled.div<feedItemType>`
  width: 17em;
  height: 17em;
  background-color: #000;
  margin-top: 0.25em;
  cursor: pointer;

  img,
  video {
    width: 17em;
    height: 17em;
    object-fit: cover;
  }
`;

const FeedItemProfile = ({
  fileUrls,
  feedId,
  postType,
}: {
  fileUrls: string;
  feedId: number;
  postType: curTabType;
}) => {
  const [feedModal, setFeedModal] = useState(false);

  return (
    <>
      <FeedItemDiv onClick={() => setFeedModal(!feedModal)}>
        {postType === "feed" ? (
          <img src={fileUrls} />
        ) : (
          <ReactPlayer url={fileUrls} width="17em" height="17em" />
        )}
      </FeedItemDiv>
      {feedModal ? (
        <FeedModalProfile
          postType={postType}
          feedIdProfile={feedId}
          modalState={feedModal}
          leelsUrl={fileUrls}
          setModalState={setFeedModal}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default FeedItemProfile;
