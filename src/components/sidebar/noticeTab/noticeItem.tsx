import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { API } from "../../../API/API";
import { allNoticeReadAtom } from "../../../recoil/Atoms/atoms";
import { noticeSort } from "../../../lib/notice";
import { noticeInterface } from "../../../types/noticeType";
import ProfileItem from "../../home/items/profileItem";
import * as S from "./style";

interface dayDiffType {
  time: number;
  timeSort: "시간" | "일";
}

const NoticeItem = ({
  createAt,
  data,
  noticeId,
  noticeType,
  read,
  userResponse,
  valid,
  url,
}: noticeInterface) => {
  const [noticeIdx, setNoticeIdx] = useState<number>();
  const [dayDiff, setDayDiff] = useState<dayDiffType>();
  const [curRead, setCurRead] = useState<boolean>(read);
  const allNoticeRead = useRecoilValue(allNoticeReadAtom);
  const { follower, following, name, nickName, userId, profileUrl } =
    userResponse;
  const timeDiff = new Date().getTime() - Date.parse(createAt);
  const aDay = 24 * 60 * 60 * 1000;

  const noticeKind = noticeType.substring(
    noticeType.length - 4,
    noticeType.length
  );

  const patchNotice = () => {
    if (curRead === false) {
      setCurRead(true);
      API({
        url: `/notice/${noticeId}`,
        method: "patch",
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (timeDiff >= aDay) {
      setDayDiff({ time: Math.floor(timeDiff / aDay), timeSort: "일" });
    } else {
      setDayDiff({
        time: Math.floor(timeDiff / (aDay / 24)),
        timeSort: "시간",
      });
    }
    console.log(createAt);
  }, []);

  useEffect(() => {
    console.log(noticeKind);
    switch (noticeKind) {
      case "SAGE":
        setNoticeIdx(1);
        break;
      case "LIKE":
        setNoticeIdx(2);
        break;
      case "MENT":
        setNoticeIdx(3);
        break;
      case "LLOW":
        setNoticeIdx(4);
        break;
      default:
        setNoticeIdx(0);
        break;
    }
  }, [noticeKind]);

  return (
    <S.noticeItemContainer read={curRead || allNoticeRead}>
      <S.noticeItem>
        <ProfileItem watched={false} width={3} marginTop={0.5} />
        <S.noticeMsg>
          {name}님이 {noticeIdx ? noticeSort[noticeIdx] : ""}
        </S.noticeMsg>
        <S.noticeTime>
          {dayDiff?.time}
          {dayDiff?.timeSort} 전
        </S.noticeTime>
      </S.noticeItem>
      <S.noticeReadBtn onClick={patchNotice}>
        <u>읽음</u>
      </S.noticeReadBtn>
    </S.noticeItemContainer>
  );
};

export default NoticeItem;
