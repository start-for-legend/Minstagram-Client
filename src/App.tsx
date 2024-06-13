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
import Reels from "./pages/reels";
import Message from "./pages/message";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Explore from "./pages/explore";
import Exception from "./pages/exception";

const App = () => {
  const setSearchState = useSetRecoilState(searchStateAtom);
  const setNoticeState = useSetRecoilState(noticeStateAtom);
  const [noticeData, setNoticeData] = useState<any>();
  const [parsedData, setParsedData] = useRecoilState(noticeDataAtom);
  const setNoticeDataIds = useSetRecoilState(noticeDataIdsAtom);
  const isLogin = Boolean(window.localStorage.getItem("mst-accessToken"));
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const tokenManager = new TokenManager();
  const isPathName = Boolean(window.location.pathname.split("/")[1]);

  useEffect(() => {
    setSearchState(false);
    setNoticeState(false);
  }, [setSearchState, setNoticeState]);

  useEffect(() => {
    if (isPathName && !isLogin) {
      alert("로그인이 필요합니다.");
      window.location.replace("/");
    }
  }, [isPathName]);

  useEffect(() => {
    console.log(parsedData);
    console.log(baseUrl);
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
    const getNotice = () =>
      API({
        url: "/notice",
        method: "get",
        headers: {
          "Content-Type": "text/event-stream",
        },
      })
        .then((res) => {
          console.log(res);
          setNoticeData(res.data.split("\n\n"));
        })
        .catch((err) => {
          console.log(err.eventStream);
        });

    if (isLogin) getNotice();
  }, [isLogin]);

  useEffect(() => {
    const eventSource = new EventSourcePolyfill(
      isLogin ? `${baseUrl}/notice` : "",
      {
        headers: {
          "Content-Type": "text/event-stream",
          Authorization: `Bearer ${tokenManager.accessToken}`,
        },
        heartbeatTimeout: 5000,
      }
    );

    eventSource.onopen = (event) => {
      console.log("SSE 연결 성공:", event);
    };

    eventSource.onmessage = (event) => {
      console.log("SSE 메시지 수신:", event);
      // 여기서 적절한 작업을 수행하세요.
    };

    eventSource.onerror = (error) => {
      console.error("SSE 오류:", error);
      // 오류 처리 코드를 여기에 추가하세요.
    };

    return () => {
      eventSource.close();
    };
  }, [isLogin, baseUrl, tokenManager.accessToken]);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Promotion />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/message/:roomId?" element={<Message />} />
          <Route path="/profile/:userId?" element={<Profile />} />
          <Route path="/story/:storyId?" element={<Exception />} />
          <Route path="/*" element={<Exception />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
