import { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  allNoticeReadAtom,
  noticeDataAtom,
  noticeDataIdsAtom,
} from "../../../recoil/Atoms/atoms";
import NoticeItem from "./noticeItem";
import * as S from "./style";
import { API } from "../../../API/API";

const NoticeTab = () => {
  const noticeData = useRecoilValue(noticeDataAtom);
  const setAllNoticeRead = useSetRecoilState(allNoticeReadAtom);
  const noticeDataIds = useRecoilValue(noticeDataIdsAtom);
  const titleRef = useRef<any>(null);

  useEffect(() => {
    console.log(noticeDataIds);
  }, []);

  useEffect(() => {
    if (titleRef.current !== null) {
      titleRef.current.focus();
    }
  }, [titleRef]);

  const patchNotice = () => {
    if (window.confirm("모두 읽음 처리하시겠습니까?")) {
      noticeDataIds.forEach((noticeId) => {
        API({
          url: `/notice/${noticeId}`,
          method: "patch",
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      });
    }
    setAllNoticeRead(true);
  };

  return (
    <S.SearchTab className="box">
      <S.noticeTitle ref={titleRef}>
        <S.noticeTitleText>알림</S.noticeTitleText>
        <S.confirmNotice onClick={patchNotice}>모두 읽음</S.confirmNotice>
      </S.noticeTitle>
      {noticeData.map((data) => {
        return <NoticeItem key={data.noticeId} {...data} />;
      })}
    </S.SearchTab>
  );
};

export default NoticeTab;
