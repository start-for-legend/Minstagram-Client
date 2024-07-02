import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import * as S from "./style";
import CommentItem from "./commentItem";
import { reelsCmtInterface } from "../../../types/reelsType";
import ProfileItem from "../../home/items/profileItem";
import { API } from "../../../API/API";
import NoHomeData from "../../common/noData";

interface reelsCommentProps {
  reelsCmt: reelsCmtInterface[];
  reelsId?: number;
}

const ReelsComment = ({ reelsCmt, reelsId }: reelsCommentProps) => {
  const [comment, setComment] = useState("");
  const [reelsCmts, setReelsCmts] = useState<reelsCmtInterface[]>(reelsCmt);

  const postCmt = async () => {
    if (comment) {
      await API({
        method: "post",
        url: `/leels-comment/${reelsId}`,
        data: { comment },
      }).then((res) => {
        console.log(res);
        setComment("");
      });
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    postCmt();
  };

  const getMoreComment = () => {
    API({
      method: "get",
      url: `/leels-comment/${reelsId}?lastCommentId=${reelsCmts[reelsCmts.length - 1].leelsCommentId}`,
    }).then((res) => setReelsCmts((prev) => [...prev, ...res.data]));
  };

  return (
    <S.reelsCommentContainer>
      <S.commentTab>
        <S.commentBox>
          {reelsCmts.length !== 0 ? (
            reelsCmts.map((data) => {
              return (
                <CommentItem
                  key={data.leelsCommentId}
                  data={data}
                  reelsId={reelsId}
                />
              );
            })
          ) : (
            <NoHomeData contentType="comment" />
          )}
          <div>
            <FontAwesomeIcon
              icon={faPlusCircle}
              size="xl"
              onClick={getMoreComment}
            />
          </div>
        </S.commentBox>
        <S.commentForm onSubmit={onSubmit}>
          <ProfileItem watched={false} width={2.5} />
          <S.commentInput
            type="text"
            value={comment}
            placeholder="댓글을 남겨보세요"
            onChange={(e) => setComment(e.target.value)}
          />
          <input type="submit" id="cmtSubmit" />
          <label htmlFor="cmtSubmit">
            <FontAwesomeIcon icon={faPaperPlane} size="xl" />
          </label>
        </S.commentForm>
      </S.commentTab>
    </S.reelsCommentContainer>
  );
};

export default ReelsComment;
