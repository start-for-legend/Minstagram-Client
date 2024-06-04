import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";

import { API } from "../../API/API";
import ReelsVideo from "../../components/reelsVideo";
import Sidebar from "../../components/sidebar";
import { searchStateAtom } from "../../recoil/Atoms/atoms";
import * as S from "./style";
import { reelsInterface } from "../../types/reelsType";

const Reels = () => {
  const searchState = useRecoilValue(searchStateAtom);
  const [logData, setLogData] = useState<reelsInterface[]>([]);
  const [dataIdx, setDataIdx] = useState(0);

  useEffect(() => {
    API({
      method: "get",
      url: "/leels",
    })
      .then((res) => setLogData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onIdxClick = (state: string) => {
    if (logData[dataIdx + 1] && state === "next") {
      setDataIdx(dataIdx + 1);
    } else if (logData[dataIdx - 1] && state === "prev") {
      setDataIdx(dataIdx - 1);
    } else {
      alert("릴스가 더 없어요!");
    }
  };

  useEffect(() => {
    console.log(logData);
  }, [logData]);

  return (
    <>
      <Sidebar />
      <S.ReelsContainer searchState={searchState}>
        <S.ReelsBtnContainer>
          <button type="button" onClick={() => onIdxClick("prev")}>
            이전 릴스
          </button>
        </S.ReelsBtnContainer>
        {/* {logData?.map((element: reelsInterface) => {
          return <ReelsVideo key={element.leelsId} {...element} />;
        })} */}
        <ReelsVideo {...logData[dataIdx]} />
        <S.ReelsBtnContainer>
          <button type="button" onClick={() => onIdxClick("next")}>
            다음 릴스
          </button>
        </S.ReelsBtnContainer>
      </S.ReelsContainer>
    </>
  );
};

export default Reels;
