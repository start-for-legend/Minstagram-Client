import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import { EventSourcePolyfill } from "event-source-polyfill";
import { useQuery } from "react-query";

import { API } from "./API/API";
import { TokenManager } from "./API/tokenManager";
import { noticeDataAtom, searchStateAtom } from "./recoil/Atoms/atoms";
import Promotion from "./pages/Promotion";
import GlobalStyle from "./styles/global";
import Sidebar from "./components/sidebar";
import Reels from "./pages/reels";
import Message from "./pages/message";
import Home from "./pages/home";
import { noticeInterface } from "./types/noticeType";

const App = () => {
  const setSearchState = useSetRecoilState(searchStateAtom);
  const [noticeData, setNoticeData] = useState<any>();
  const [parsedData, setParsedData] = useRecoilState(noticeDataAtom);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const tokenManager = new TokenManager();

  useEffect(() => {
    setSearchState(false);
  }, [setSearchState]);

  useEffect(() => {
    console.log(parsedData);
  }, [parsedData]);

  useEffect(() => {
    if (noticeData != null) {
      noticeData.forEach((element: any) => {
        const noticeContent = element.split("data:")[1];
        if (noticeContent) {
          const noticeContent1 = JSON.parse(noticeContent);
          typeof noticeContent1 === "object"
            ? setParsedData((data) => [...data, noticeContent1])
            : "";
        }
      });
    }
  }, [noticeData]);

  useEffect(() => {
    API({
      url: "/notice",
      method: "get",
    })
      .then((res) => {
        setNoticeData(res.data.split("\n\n"));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const eventSource = new EventSourcePolyfill(`${baseUrl}/notice`, {
      headers: {
        "Content-Type": "text/event-stream",
        Authorization: `Bearer ${tokenManager.accessToken}`,
      },
      heartbeatTimeout: 50000,
    });

    eventSource.onopen = (res) => {
      console.log(res);
    };

    eventSource.onmessage = (res) => {
      console.log(res);
    };

    eventSource.onerror = (err) => {
      console.log(err);
    };
    eventSource.OPEN;

    return () => {
      eventSource.close();
    };
  }, []);

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
