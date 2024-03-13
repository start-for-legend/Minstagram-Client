import { BrowserRouter, Route, Routes } from "react-router-dom";
import Promotion from "./pages/Promotion";
import GlobalStyle from "./styles/global";
import Sidebar from "./components/sidebar";
import { RecoilRoot, useRecoilCallback, useRecoilState } from "recoil";
import Reels from "./pages/reels";
import { useEffect } from "react";
import { searchStateAtom } from "./recoil/Atoms/atoms";

function App() {
  const [searchState, setSearchState] = useRecoilState(searchStateAtom);
  useEffect(() => {
    setSearchState(false);
  }, []);
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Promotion />} />
          <Route path="/home" element={<Sidebar />} />
          <Route path="/explore" element={<Sidebar />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/message" element={<Sidebar />} />
          <Route path="/profile" element={<Sidebar />} />
          <Route path="/test" element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
