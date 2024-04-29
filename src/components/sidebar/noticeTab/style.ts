import styled, { keyframes } from "styled-components";

interface noticeItemProps {
  read: boolean;
}

const searchTabAppear = keyframes`
  0% {
    margin-left: -22em;
    opacity: 0%;
  }
  50%{
    opacity: 0%;
  }
  75%{
    opacity: 25%;
  }
  100% {
    margin-left: 0;
    opacity: 100%;
  }
`;

export const SearchTab = styled.div`
  width: 23em;
  height: 100vh;
  line-height: 2em;
  border-right: 1px solid #c5c5c5;
  z-index: -1;
  background-color: white;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;

  animation: ${searchTabAppear} 0.5s;
`;

export const noticeTitle = styled.div`
  height: 4rem;
  font-weight: 800;
  margin-top: 1em;
  padding-left: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #c5c5c5;
`;

export const noticeTitleText = styled.div`
  width: 2em;
  float: left;
  font-size: 2em;
`;

export const confirmNotice = styled.div`
  width: 6em;
  margin-left: auto;
  text-align: center;
  border: 1px solid black;
  border-radius: 1em;
  cursor: pointer;
  &:hover {
    background-color: #c5c5c5;
  }
`;

export const noticeItemContainer = styled.div<noticeItemProps>`
  width: 21em;
  height: 4em;
  border-bottom: 1px solid #c5c5c5;
  padding-left: 1em;
  line-height: 2em;
  padding-bottom: 0.5em;
  background-color: ${(props) => (props.read ? "" : "#d4ebf2")};
`;

export const noticeItem = styled.div`
  width: 18em;
  float: left;
`;

export const noticeMsg = styled.div`
  height: 1.5em;
`;

export const noticeTime = styled.div`
  color: #808080;
`;

export const noticeReadBtn = styled.div`
  cursor: pointer;
`;
