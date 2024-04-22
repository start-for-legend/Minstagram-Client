import styled, { keyframes } from "styled-components";

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

  animation: ${searchTabAppear} 0.5s;
`;
