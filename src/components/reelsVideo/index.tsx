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

  useEffect(() => {
    if (leelsId) {
      API({
        method: "get",
        url: `/leels-comment/${leelsId}`,
      }).then((res) => setReelsCmt(res.data));
    }
  }, [leelsUrl]);

  const reelsLikeFunc = () => {
    if (!reelsLike) {
      setHeartSum(heartSum + 1);
      API({
        url: `/leels/${leelsId}/like`,
        method: "post",
      });
    } else {
      setHeartSum(heartSum - 1);
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
            <img src={leelsUrl} />
          </S.videoBox>

          {/* 
          <ReactPlayer url={leelsUrl} playing={isPlaying} />
           */}
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
          <S.reelsOptionValue>{heartSum}</S.reelsOptionValue>
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
      {commentOpened && reelsCmt ? <ReelsComment reelsCmt={reelsCmt} /> : null}
    </>
  );
};

export default ReelsVideo;
