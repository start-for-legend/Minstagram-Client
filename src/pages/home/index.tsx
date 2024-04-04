import PageContainer from "../../components/common/pageContainer";
import HomeTab from "../../components/home";
import Sidebar from "../../components/sidebar";

const Home = () => {
  return (
    <>
      <Sidebar />
      <PageContainer paddingTopEm={3} heightVh={200} alignItem="start" isStatic>
        <HomeTab />
      </PageContainer>
    </>
  );
};
export default Home;
