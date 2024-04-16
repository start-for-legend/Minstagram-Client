import styled from "styled-components";

import { chatterType } from "../../../types/msgType";

interface chatMsgProps {
  chatterType: chatterType;
}

interface selectedProps {
  selected?: boolean;
}

export const ChattingContainer = styled.div<selectedProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.selected ? "end" : "center")};
`;

export const ChattingTab = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const ChatWindow = styled.div`
  width: calc(100% - 4em);
  height: 3em;
  line-height: 3em;
  border: 1px solid #000;
  margin-bottom: 2em;
  border-radius: 2em;

  svg {
    cursor: pointer;
    margin-left: 0.5em;
  }
`;

export const ChatInput = styled.input`
  width: calc(100% - 10em);
  border: none;
  outline: none;
  height: 3em;
  margin-left: 2em;
  background: none;
`;

export const ChatContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1em;
  height: calc(100vh - 14em);
  overflow-y: scroll;
`;

export const ChatMsg = styled.div<chatMsgProps>`
  width: fit-content;
  max-width: 20em;
  font-size: 1.5em;
  padding: 0.25em 0.5em 0.25em 0.5em;
  color: #fff;
  border-radius: 1em;
  margin-bottom: 0.25em;
  word-wrap: break-word;

  margin-left: ${(props) => (props.chatterType === "self" ? "auto" : "1em")};
  margin-right: ${(props) => (props.chatterType === "self" ? "1em" : "auto")};
  background-color: ${(props) =>
    props.chatterType === "self" ? "#0095f6" : "#000"};
`;

export const ChatProfile = styled.div`
  width: 100%;
  height: 6em;
  border-bottom: 1px solid #c5c5c5;
`;

export const TargetName = styled.div`
  display: block;
  font-size: 2em;
  font-weight: 700;
  padding-top: 0.5em;
  width: 5em;
`;

export const TargetInfo = styled.div`
  width: 20em;
  height: 6em;
  float: left;
`;

export const InfoSvg = styled.div`
  width: 1em;
  height: 1em;
  margin-left: 5em;
`;

export const ProfilePic = styled.div`
  margin-top: 1em;
  width: 4em;
  height: 4em;
  background-color: #000;
  border-radius: 3em;
  margin-left: 1em;
  margin-right: 1em;
  float: left;
`;

export const Active = styled.div`
  font-size: 1em;
  padding-left: 0.5em;
  width: 10em;
`;

export const NotSelected = styled.div`
  text-align: center;
  h3 {
    font-size: 1.5em;
  }
`;

export const NotSelectedSVG = styled.div`
  text-align: center;
  width: 8em;
  height: 8em;
  border: 1px solid #000;
  border-radius: 4em;
  line-height: 10em;
  margin-left: 5.5em;
`;

export const NotSelectedBtn = styled.button`
  width: 8em;
  height: 2.5em;
  color: #fff;
  background-color: #0095f6;
  border: none;
  margin-top: 0.5em;
  border-radius: 1em;
  cursor: pointer;

  &:hover {
    background-color: #0019f4;
    border: none;
  }
`;
