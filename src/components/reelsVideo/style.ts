import styled, { keyframes } from "styled-components";

export const reelsVideoContainer = styled.div`
  width: inherit;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15em;
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
  height: 100vh;
  width: 35em;
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

export const videoBox = styled.div`
  width: 30em;
  height: 55em;
  border-radius: 1em;
  background-color: #000;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: inherit;
  }
`;

export const reelsOptions = styled.div`
  margin-top: auto;
  text-align: center;
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
