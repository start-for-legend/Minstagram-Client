import styled, { keyframes } from "styled-components";

export const reelsVideoContainer = styled.div`
  width: inherit;
  height: 95vh;
  display: flex;
  justify-content: center;
  margin-left: 15em;
  overflow: hidden;
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

export const volumeRange = styled.input`
  background: none;
  accent-color: #000;
  writing-mode: vertical-lr;
  direction: rtl;
  vertical-align: bottom;
  height: 20em;
`;

export const reelsVideo = styled.div`
  height: 100vh;
  width: 30em;
  display: flex;
  justify-content: center;
  svg {
    position: absolute;
    z-index: 2;
    transform: scale(1.5);

    animation: ${appearHeart} 2s;
  }
`;

export const videoBox = styled.div`
  width: 30em;
  height: 95vh;
  border-radius: 1em;
  background-color: #000;

  video {
    float: left;
  }
`;

export const reelsInfo = styled.div`
  z-index: 1;
`;

export const reelsTitle = styled.div`
  width: 30em;
  text-align: left;
  color: #fff;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.5em;
  }
`;

export const reelsHash = styled.div`
  width: 27em;
  text-align: left;
  color: #fff;
  margin-top: 1em;
  margin-left: 2em;
`;

export const reelsOptions = styled.div`
  margin-left: 1em;
  margin-top: auto;
  text-align: center;
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
  svg {
    display: block;
  }

  svg:hover {
    transform: scale(1.5);
    transition: transform 0.2s ease-in-out;
  }

  svg:not(:hover) {
    transform: scale(1);
    transition: transform 0.1s ease-in;
  }

  .speakerIcon {
    margin-bottom: 5em;
  }
`;

export const reelsOptionValue = styled.div`
  margin-bottom: 0.5em;
  font-weight: 900;
  font-size: 1.5em;
`;
