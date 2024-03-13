import { useRecoilValue } from "recoil";
import ReelsVideo from "../../components/reelsVideo";
import Sidebar from "../../components/sidebar";
import { ReelsContainer } from "./style";
import { searchStateAtom } from "../../recoil/Atoms/atoms";

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
