import styled from "styled-components";

import HomeTab from "../../components/home";
import Sidebar from "../../components/sidebar";

const HomeContainer = styled.div`
  padding-top: 3em;
  height: auto;
  width: calc(100vw - 22em);
  margin-left: 22em;
  display: flex;
  align-items: start;
  justify-content: center;
`;

const Home = () => {
  return (
    <>
      <Sidebar />
      <HomeContainer>
        <HomeTab />
      </HomeContainer>
    </>
  );
};
export default Home;
