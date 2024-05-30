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
  const [logData, setLogData] = useState<reelsInterface>();

  useEffect(() => {
    API({
      method: "get",
      url: "/leels",
    })
      .then((res) => setLogData(res.data[0]))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(logData);
  }, [logData]);

  return (
    <>
      <Sidebar />
      <S.ReelsContainer searchState={searchState}>
        <ReelsVideo {...logData} />
      </S.ReelsContainer>
    </>
  );
};

export default Reels;
