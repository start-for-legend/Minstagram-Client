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

  h2 {
    padding-left: 1.5rem;
    font-size: 2em;
  }

  svg {
    margin-top: auto;
    cursor: pointer;
  }

  animation: ${searchTabAppear} 0.5s;
`;

export const SearchForm = styled.form`
  width: 20em;
  border: 1px solid #c5c5c5;
  line-height: 2.5em;
  border-radius: 0.5em;
  margin-left: 1.5em;
`;

export const SearchInput = styled.input`
  width: 17em;
  border: none;
  text-indent: 1em;

  &:focus {
    outline: none;
  }
`;

export const SearchResult = styled.div`
  border-top: 1px solid #c5c5c5;
  width: 23em;
  height: auto;
  margin-top: 1em;

  h3 {
    margin-left: 1.5rem;
  }
`;
