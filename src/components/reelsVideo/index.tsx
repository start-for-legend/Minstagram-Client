import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faPaperPlane,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { far } from "@fortawesome/free-regular-svg-icons";

import { SIUU } from "../../assets/files";
import * as S from "./style";
import ReelsComment from "./reelsComment";

const ReelsVideo = () => {
  const [reelsLike, setReelsLike] = useState(false);
  const [doubleClicked, setDoubleClicked] = useState(false);
  const [commentOpened, setCommentOpened] = useState(false);

  const onDoubleClick = () => {
    setReelsLike(true);
    setDoubleClicked(true);
    setTimeout(() => setDoubleClicked(false), 2000);
  };

  return (
    <>
      <S.reelsVideoContainer>
        <S.reelsVideo onDoubleClick={onDoubleClick}>
          <SIUU />
          {doubleClicked ? (
            <FontAwesomeIcon icon={fas.faHeart} color="red" size="5x" />
          ) : (
            ""
          )}
        </S.reelsVideo>
        <S.reelsOptions>
          <FontAwesomeIcon
            icon={reelsLike ? fas.faHeart : far.faHeart}
            color={reelsLike ? "red" : "black"}
            size="2x"
            onClick={() => setReelsLike(!reelsLike)}
          />
          <S.reelsOptionValue>7.4k</S.reelsOptionValue>
          <FontAwesomeIcon
            onClick={() => setCommentOpened(!commentOpened)}
            icon={faComment}
            size="2x"
          />
          <S.reelsOptionValue>2.4k</S.reelsOptionValue>
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
        </S.reelsOptions>
      </S.reelsVideoContainer>
      {commentOpened ? <ReelsComment /> : null}
    </>
  );
};

export default ReelsVideo;
