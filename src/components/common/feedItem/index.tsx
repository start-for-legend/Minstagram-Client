import ReactPlayer from "react-player";
import styled from "styled-components";
import { useState } from "react";

import { feedType } from "../../../types/feedType";
import FeedModalProfile from "./feedModal/indexProfile";
import { curTabType } from "../../../types/profileType";

interface feedItemType {
  postType: curTabType;
  postId: number;
  firstImg: string;
  leelsUrl: string;
}

export const FeedItemDiv = styled.div`
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

  video {
    object-fit: cover;
  }
`;

const FeedItem = ({ postType, firstImg, postId, leelsUrl }: feedItemType) => {
  const [feedModal, setFeedModal] = useState(false);

  return (
    <>
      <FeedItemDiv onClick={() => setFeedModal(!feedModal)}>
        {postType === "feed" ? (
          <img src={firstImg} />
        ) : (
          <ReactPlayer url={firstImg} width="17em" height="17em" />
        )}
      </FeedItemDiv>
      {feedModal ? (
        <FeedModalProfile
          feedIdProfile={postId}
          leelsUrl={leelsUrl}
          postType={postType}
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
