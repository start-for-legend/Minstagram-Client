import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot, useSetRecoilState } from "recoil";

import { searchStateAtom } from "./recoil/Atoms/atoms";
import Promotion from "./pages/Promotion";
import GlobalStyle from "./styles/global";
import Sidebar from "./components/sidebar";
import Reels from "./pages/reels";
import Message from "./pages/message";
import Home from "./pages/home";

const App = () => {
  const setSearchState = useSetRecoilState(searchStateAtom);
  useEffect(() => {
    setSearchState(false);
  }, [setSearchState]);
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Promotion />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Sidebar />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/message/:userId?" element={<Message />} />
          <Route path="/profile" element={<Sidebar />} />
          <Route path="/test" element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
