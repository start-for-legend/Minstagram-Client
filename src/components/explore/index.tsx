import { useEffect, useState } from "react";

import { exploreType } from "../../types/exploreType";
import FeedItem from "../common/feedItem";
import { feedType } from "../../types/feedType";
import { API } from "../../API/API";
import * as S from "./style";

const ExploreTab = () => {
  const [reelsData, setReelsData] = useState<exploreType[]>();
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
        return <FeedItem key={element.feedId} {...element} />;
      })}
    </S.exploreTab>
  );
};

export default ExploreTab;
