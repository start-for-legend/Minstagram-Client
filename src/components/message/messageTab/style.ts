import styled from "styled-components";

export const msgTab = styled.div`
  display: flex;
  flex-direction: column;
  width: 26em;
  height: 100vh;
  border-right: 1px solid #c5c5c5;
  padding-left: 1em;
`;

export const myProfile = styled.div`
  padding-top: 1em;
  width: 26em;

  span {
    font-size: 2em;
    padding-right: 0.5em;
    cursor: pointer;
  }

  :last-child {
    padding-left: 2.5em;
  }
`;

export const msgHelp = styled.div`
  width: 26em;
  margin-top: 1em;
  font-size: 1.5em;
`;

export const msgProfile = styled.div`
  margin-left: -1em;
  overflow: scroll;
  overflow-x: hidden;
`;
