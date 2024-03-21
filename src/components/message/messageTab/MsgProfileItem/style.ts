import styled from "styled-components";

export const ProfileBox = styled.div`
  height: 5em;
  width: 26em;
  float: left;
  line-height: 1.5em;
  padding-top: 1em;
  margin-left: -2em;
  padding-left: 3em;
  cursor: pointer;

  &:hover {
    background-color: #c5c5c5;
  }
`;

export const Circle = styled.div`
  width: 4em;
  height: 4em;
  background-color: #000;
  border-radius: 3em;
  float: left;
  margin-right: 0.5em;
`;

export const TargetName = styled.div`
  margin-top: 0.5em;
`;

export const MsgPreview = styled.div`
  color: #868e96;
`;
