import PageContainer from "../../components/common/pageContainer";
import ReelsVideo from "../../components/reelsVideo";
import Sidebar from "../../components/sidebar";

const Reels = () => {
  return (
    <>
      <Sidebar />
      <PageContainer isStatic>
        <ReelsVideo />
      </PageContainer>
    </>
  );
};

export default Reels;
