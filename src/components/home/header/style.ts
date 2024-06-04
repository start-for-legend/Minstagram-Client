import styled from "styled-components";

import { storyType } from "../../../types/storyType";

export const feedHeader = styled.div`
  width: 45em;
  height: 6.5em;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  display: flex;
  border-bottom: 1px solid #c5c5c5;
`;

export const profile = styled.div`
  width: 5em;
  height: 5em;
  display: inline-block;
  white-space: normal;
  cursor: pointer;
`;

export const profileName = styled.div`
  width: 6em;
  text-align: center;
  white-space: pre-wrap;
`;

export const profileImg = styled.div<storyType>`
  width: 4em;
  height: 4em;
  background-color: lightblue;
  border-radius: 2em;
  margin-left: 1em;
  display: inline-block;
`;
