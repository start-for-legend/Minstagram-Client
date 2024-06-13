import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faComment,
  faPaperPlane,
  faVolumeHigh,
  faVolumeLow,
  faVolumeXmark,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import * as S from "./style";
import ReelsComment from "./reelsComment";
import { reelsCmtInterface, reelsInterface } from "../../types/reelsType";
import { API } from "../../API/API";
import ProfileItem from "../home/items/profileItem";

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
  const [volume, setVoulume] = useState(0.5);
  const [prevVolume, setPrevVolume] = useState(0);
  const isLike = reelsLike ? 1 : 0;
  const [speakerIcon, setSpeakerIcon] = useState<IconDefinition>(faVolumeHigh);

  useEffect(() => {
    setCommentOpened(false);
    if (leelsId !== undefined && heartCount !== undefined) {
      API({
        method: "get",
        url: `/leels-comment/${leelsId}`,
      }).then((res) => setReelsCmt(res.data));

      API({
        method: "get",
        url: `/leels/valid/${leelsId}`,
      }).then((res) => {
        const valid = res.data.isTrue;
        if (valid) setHeartSum(heartCount - 1);
        setReelsLike(valid);
      });
    }
  }, [leelsId, heartCount]);

  useEffect(() => {
    console.log(leelsUrl);
  }, [leelsUrl]);

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

  const onScroll = () => {
    console.log("scrolled");
  };

  useEffect(() => {
    if (volume === 0) {
      setSpeakerIcon(faVolumeXmark);
    } else if (volume > 0.45) {
      setSpeakerIcon(faVolumeHigh);
    } else {
      setSpeakerIcon(faVolumeLow);
    }
  }, [volume]);

  return (
    <>
      <S.reelsVideoContainer onScroll={onScroll}>
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
              volume={volume}
              width="30em"
              height="50em"
            />
            <S.reelsInfo>
              <S.reelsTitle>
                <ProfileItem
                  watched={false}
                  profileURL={author?.profileUrl}
                  width={3}
                  marginLeft={2}
                />
                <Link to={`/profile/${author?.userId}`}>
                  {author?.nickName}
                </Link>
                <div>{content}</div>
              </S.reelsTitle>
              <S.reelsHash>
                {hashtags?.map((element) => {
                  return <span key={element}>#{element} </span>;
                })}
              </S.reelsHash>
            </S.reelsInfo>
          </S.videoBox>

          {doubleClicked ? (
            <FontAwesomeIcon icon={fas.faHeart} color="red" size="5x" />
          ) : (
            ""
          )}
        </S.reelsVideo>
        <S.reelsOptions>
          <S.volumeRange
            type="range"
            value={volume * 100}
            onChange={(e: any) => setVoulume(e.target.value / 100)}
          />
          <FontAwesomeIcon
            className="speakerIcon"
            icon={speakerIcon}
            size="xl"
            onClick={() => {
              if (volume !== 0) {
                setPrevVolume(volume);
                setVoulume(0);
              } else {
                setVoulume(prevVolume);
              }
            }}
          />
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
