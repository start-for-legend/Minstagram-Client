import styled from "styled-components";

export const profileHeader = styled.div`
  width: 60em;
  height: 10em;
  margin-top: 3em;
  padding-bottom: 2em;
  border-bottom: 1px solid #000;

  display: flex;
  justify-content: center;
`;

export const profileDiv = styled.div`
  float: left;
  width: 13em;
  height: 13em;
  margin-right: 1em;
`;

export const profileHeaderItem = styled.div`
  width: 32.5em;
  height: 10em;
`;

export const userName = styled.span`
  font-size: 1.5em;
  font-weight: 800;
  margin-right: 0.5em;
`;

export const followBtn = styled.button`
  width: auto;
  padding: 0.25em 1em 0.25em 1em;
  font-size: 1.25em;
  margin-right: 0.5em;
  border: none;
  background-color: #0095f6;
  color: #fff;
  border-radius: 0.25em;
  cursor: pointer;
`;

export const userInfo = styled.div`
  width: 40em;
  margin-top: 1em;
  span {
    font-weight: 600;
    font-size: 1.25em;
    margin-right: 2em;
    cursor: pointer;
  }
`;
