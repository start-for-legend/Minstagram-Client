import * as S from "./style";
import CommentItem from "./commentItem";
import { reelsCmtInterface } from "../../../types/reelsType";

interface reelsCommentProps {
  reelsCmt: reelsCmtInterface[];
}

const ReelsComment = ({ reelsCmt }: reelsCommentProps) => {
  return (
    <S.reelsCommentContainer>
      <S.commentTab>
        {reelsCmt.map((data) => {
          return <CommentItem key={data.leelsCommentId} {...data} />;
        })}
      </S.commentTab>
    </S.reelsCommentContainer>
  );
};

export default ReelsComment;
