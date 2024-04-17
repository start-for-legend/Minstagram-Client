import styled, { keyframes } from "styled-components";

export const reelsVideoContainer = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15em;

  img {
    transform: translate(-50%, 0);
    margin-left: 50%;
    max-width: 35em;
    max-height: 60em;
    min-width: 25em;
    min-height: 55em;
    border-radius: 1em;
  }
`;

export const appearHeart = keyframes`
  0%{
    transform: scale(0);
    transform: rotate(0);
  }
  10%{
    transform: rotate(58);
    transform: scale(1.5);
  }
  75%{
    transform: rotate(62);
    transform: scale(1.5);
  }
  100%{
    transform: rotate(0);
    transform: scale(0);
  }
`;

export const reelsVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    position: absolute;
    z-index: 2;
    transform: scale(1.5);

    animation: ${appearHeart} 2s;
  }
`;

export const reelsOptions = styled.div`
  margin-top: auto;
  text-align: center;
  margin-left: 1em;
  margin-bottom: 3em;
  svg {
    margin-left: 0.25em;
    display: block;
  }

  svg:hover {
    transform: scale(1.5);
    transition: transform 0.2s ease-in-out;
  }

  :not(:hover) {
    transform: scale(1);
    transition: transform 0.1s ease-in;
  }
`;

export const reelsOptionValue = styled.div`
  margin-bottom: 0.5em;
  font-weight: 900;
  font-size: 1.5em;
`;

export const reelsCommentContainer = styled.div`
  position: absolute;
  width: 34em;
  height: 100vh;
  margin-left: 85em;
  z-index: 2;
`;

export const commentTab = styled.div`
  padding: 1em 1em 1em 1em;
  width: 20em;
  height: 40em;
  background-color: white;
  margin-left: 50%;
  margin-top: 100%;
  transform: translate(-50%, -60%);
  border: 2px solid #c5c5c5;
  border-radius: 1em;
`;

export const commentItem = styled.div`
  width: 38em;
  padding-left: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  svg:hover {
    transform: scale(1.25);
    transition-duration: 0.25s;
  }
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
`;

export const commentInfo = styled.div`
  color: #c5c5c5;
  width: 30em;
  margin-left: 3em;
`;
