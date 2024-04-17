import styled from "styled-components";

export const reelsCommentContainer = styled.div`
  position: absolute;
  width: 34em;
  height: 100vh;
  margin-left: 85em;
  z-index: 2;
`;

export const commentTab = styled.div`
  padding: 1.5em 2.5em 1.5em 1.5em;
  width: 20em;
  height: 40em;
  background-color: white;
  margin-left: 50%;
  margin-top: 100%;
  transform: translate(-50%, -60%);
  border: 2px solid #c5c5c5;
  border-radius: 1em;
  overflow-y: auto;
  overflow-x: hidden;
`;

/* export const commentTab = styled.div`
  margin-left: 1em;

  span {
    font-family: 900;
    padding-right: 1em;
    float: left;
  }
`; */

export const feedContent = styled.div`
  width: 17em;
  word-wrap: break-word;
  height: auto;
  float: left;
  div {
    width: 30em;
  }
  margin-bottom: 2em;
`;

export const commentContent = styled.div`
  width: 20em;
  float: left;
  margin-bottom: 2em;
`;

export const commentInfo = styled.div`
  color: #c5c5c5;
  width: 30em;
  margin-left: 3em;
`;
