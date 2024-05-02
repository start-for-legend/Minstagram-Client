import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import ProfileItem from "../../../home/items/profileItem";
import * as S from "./style";
import { feedType } from "../../../../types/feedType";
import CommentItem from "./commentItem";
import { API } from "../../../../API/API";
import { commentType } from "../../../../types/commentType";

const FeedModal = ({
  element: { content, feedId, fileUrls, hashtags, userResponse },
  modalState,
  setModalState,
}: {
  element: feedType;
  modalState: boolean;
  setModalState: Function;
}) => {
  const [comments, setComments] = useState<commentType[]>();

  useEffect(() => {
    console.log({ content, feedId, fileUrls, hashtags, userResponse });
  }, [content, feedId, fileUrls, hashtags, userResponse]);

  useEffect(() => {
    const getComment = async () => {
      await API({
        method: "get",
        url: `/feed-comment/${feedId}`,
      }).then((res) => setComments(res.data));
    };
    getComment();
  }, []);

  return (
    <ReactModal
      isOpen={modalState}
      onRequestClose={() => setModalState(false)}
      style={S.feedModalStyles}
    >
      <S.modalImg>
        <img src={fileUrls ? fileUrls[0] : ""} />
      </S.modalImg>
      <S.right>
        <S.modalHeader>
          <ProfileItem watched={false} width={3} />
          <S.profileName>{userResponse.nickName}</S.profileName>
          <S.followBtn>팔로우</S.followBtn>
          <FontAwesomeIcon icon={faEllipsis} size="2x" />
        </S.modalHeader>
        <S.commentContainer>
          <S.commentScrollContainer>
            {comments && comments?.length !== 0 ? (
              comments.map((element: commentType) => {
                return <CommentItem key={element.feedCommentId} {...element} />;
              })
            ) : (
              <div>아직 아무런 댓글이 달리지 않았어요!</div>
            )}
          </S.commentScrollContainer>
        </S.commentContainer>
      </S.right>
    </ReactModal>
  );
};

export default FeedModal;
