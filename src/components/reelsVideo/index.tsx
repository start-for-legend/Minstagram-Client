import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faPaperPlane,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { far } from "@fortawesome/free-regular-svg-icons";

import * as S from "./style";
import ReelsComment from "./reelsComment";
import { reelsCmtInterface, reelsInterface } from "../../types/reelsType";
import { API } from "../../API/API";

const ReelsVideo = ({
  author,
  content,
  hashtags,
  heartCount,
  leelsId,
  leelsUrl,
}: reelsInterface) => {
  const [reelsLike, setReelsLike] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [doubleClicked, setDoubleClicked] = useState(false);
  const [commentOpened, setCommentOpened] = useState(false);
  const [heartSum, setHeartSum] = useState<number>(heartCount || 0);
  const [reelsCmt, setReelsCmt] = useState<reelsCmtInterface[]>();
  const isLike = reelsLike ? 1 : 0;

  useEffect(() => {
    if (leelsId && heartCount) {
      API({
        method: "get",
        url: `/leels-comment/${leelsId}`,
      }).then((res) => setReelsCmt(res.data));

      API({
        method: "get",
        url: `/leels/valid/${leelsId}`,
      }).then((res) => {
        setHeartSum(heartCount - 1);
        setReelsLike(res.data.isTrue);
        console.log(`heartSum = ${heartSum}`);
      });
    }
  }, [leelsUrl, heartCount]);

  const reelsLikeFunc = () => {
    if (!reelsLike) {
      API({
        url: `/leels/${leelsId}/like`,
        method: "post",
      });
    } else {
      API({
        url: `/leels/${leelsId}/like`,
        method: "patch",
      });
    }
  };

  const onDoubleClick = () => {
    if (!reelsLike) {
      reelsLikeFunc();
    }
    setReelsLike(true);
    setDoubleClicked(true);
    setTimeout(() => setDoubleClicked(false), 1996);
  };

  return (
    <>
      <S.reelsVideoContainer>
        <S.reelsVideo
          onClick={() => setIsPlaying(!isPlaying)}
          onDoubleClick={onDoubleClick}
        >
          <S.videoBox>
            <ReactPlayer
              loop
              onReady={() => setIsPlaying(true)}
              controls={false}
              url={leelsUrl}
              playing={isPlaying}
            />
          </S.videoBox>

          {doubleClicked ? (
            <FontAwesomeIcon icon={fas.faHeart} color="red" size="5x" />
          ) : (
            ""
          )}
        </S.reelsVideo>
        <S.reelsOptions>
          <FontAwesomeIcon
            cursor="pointer"
            icon={reelsLike ? fas.faHeart : far.faHeart}
            color={reelsLike ? "red" : "black"}
            size="2x"
            onClick={() => {
              reelsLikeFunc();
              setReelsLike(!reelsLike);
            }}
          />
          <S.reelsOptionValue>{heartSum + isLike}</S.reelsOptionValue>
          <FontAwesomeIcon
            cursor="pointer"
            onClick={() => setCommentOpened(!commentOpened)}
            icon={faComment}
            size="2x"
          />
          <S.reelsOptionValue>
            {reelsCmt ? reelsCmt.length : 0}
          </S.reelsOptionValue>
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
        </S.reelsOptions>
      </S.reelsVideoContainer>
      {commentOpened && reelsCmt ? (
        <ReelsComment reelsCmt={reelsCmt} reelsId={leelsId} />
      ) : null}
    </>
  );
};

export default ReelsVideo;
