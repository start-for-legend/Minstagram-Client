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
