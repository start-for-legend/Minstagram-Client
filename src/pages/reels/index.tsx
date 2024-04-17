import { useRecoilValue } from "recoil";

import PageContainer from "../../components/common/pageContainer";
import ReelsVideo from "../../components/reelsVideo";
import Sidebar from "../../components/sidebar";
import * as S from "./style";
import { searchStateAtom } from "../../recoil/Atoms/atoms";

const Reels = () => {
  const searchState = useRecoilValue(searchStateAtom);
  return (
    <>
      <Sidebar />
      <S.ReelsContainer searchState={searchState}>
        <ReelsVideo />
      </S.ReelsContainer>
    </>
  );
};

export default Reels;
