import { useEffect, useState } from "react";

import { exploreType } from "../../types/exploreType";
import FeedItem from "../common/feedItem";
import { feedType, reelsType } from "../../types/feedType";
import { API } from "../../API/API";
import * as S from "./style";
import { reelsInterface } from "../../types/reelsType";

const ExploreTab = () => {
  const [reelsData, setReelsData] = useState<reelsInterface[]>();
  const [feedData, setFeedData] = useState<feedType[]>();

  useEffect(() => {
    const getExplore = async () => {
      await API({
        method: "get",
        url: "/explore",
      }).then((res) => {
        setFeedData(res.data.feedResponse);
        setReelsData(res.data.leelsResponse);
      });
    };

    getExplore();
  }, []);
  return (
    <S.exploreTab>
      {feedData?.map((element) => {
        return (
          <FeedItem
            key={element.feedId}
            postType="feed"
            leelsUrl=""
            postId={element.feedId}
            firstImg={element.fileUrls[0]}
          />
        );
      })}
      {reelsData?.map((element) => {
        return (
          <FeedItem
            key={element.leelsId}
            postType="leels"
            leelsUrl={element.leelsUrl}
            postId={element.leelsId}
            firstImg={element.leelsUrl}
          />
        );
      })}
    </S.exploreTab>
  );
};

export default ExploreTab;
