import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { EventSourcePolyfill } from "event-source-polyfill";

import { API } from "./API/API";
import { TokenManager } from "./API/tokenManager";
import {
  noticeDataAtom,
  noticeDataIdsAtom,
  noticeStateAtom,
  searchStateAtom,
} from "./recoil/Atoms/atoms";
import Promotion from "./pages/Promotion";
import GlobalStyle from "./styles/global";
import Sidebar from "./components/sidebar";
import Reels from "./pages/reels";
import Message from "./pages/message";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Explore from "./pages/explore";

const App = () => {
  const setSearchState = useSetRecoilState(searchStateAtom);
  const setNoticeState = useSetRecoilState(noticeStateAtom);
  const [noticeData, setNoticeData] = useState<any>();
  const [parsedData, setParsedData] = useRecoilState(noticeDataAtom);
  const setNoticeDataIds = useSetRecoilState(noticeDataIdsAtom);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const tokenManager = new TokenManager();

  useEffect(() => {
    setSearchState(false);
    setNoticeState(false);
  }, [setSearchState, setNoticeState]);

  useEffect(() => {
    console.log(parsedData);
  }, [parsedData]);

  useEffect(() => {
    if (noticeData != null) {
      noticeData.forEach((element: any) => {
        const content = element.split("data:")[1];
        if (content) {
          const noticeContent = JSON.parse(content);
          typeof noticeContent === "object" && noticeContent.read === false
            ? setNoticeDataIds((prev) => [
                ...(prev || []),
                noticeContent.noticeId,
              ])
            : "";
          typeof noticeContent === "object"
            ? setParsedData((data) => [noticeContent, ...data])
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
      heartbeatTimeout: 86400000,
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
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Promotion />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/message/:userId?" element={<Message />} />
          <Route path="/profile/:userId?" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
