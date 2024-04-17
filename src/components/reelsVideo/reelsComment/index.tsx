import * as S from "./style";
import CommentItem from "./commentItem";

const ReelsComment = () => {
  return (
    <S.reelsCommentContainer>
      <S.commentTab>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </S.commentTab>
    </S.reelsCommentContainer>
  );
};

export default ReelsComment;
