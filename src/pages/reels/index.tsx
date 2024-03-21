import { useRecoilValue } from "recoil";

import { searchStateAtom } from "../../recoil/Atoms/atoms";
import { ReelsContainer } from "./style";
import ReelsVideo from "../../components/reelsVideo";
import Sidebar from "../../components/sidebar";

const Reels = () => {
  const searchState = useRecoilValue(searchStateAtom);
  return (
    <>
      <Sidebar />
      <ReelsContainer searchState={searchState}>
        <ReelsVideo />
      </ReelsContainer>
    </>
  );
};

export default Reels;
