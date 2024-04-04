import styled from "styled-components";

import { storyType } from "../../../types/storyType";

export const feedHeader = styled.div`
  width: 45em;
  height: 7em;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  display: flex;
`;

export const profile = styled.div`
  width: 5em;
  height: 5em;
  display: inline-block;
  white-space: normal;
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
