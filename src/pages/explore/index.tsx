import { useRecoilValue } from "recoil";

import Sidebar from "../../components/sidebar";
import { searchStateAtom } from "../../recoil/Atoms/atoms";
import ExploreTab from "../../components/explore";
import * as S from "./style";
import Footer from "../../components/footer";

const Explore = () => {
  const searchState = useRecoilValue(searchStateAtom);
  return (
    <>
      <Sidebar />
      <S.ExploreContainer searchState={searchState}>
        <ExploreTab />
        <Footer />
      </S.ExploreContainer>
    </>
  );
};

export default Explore;
