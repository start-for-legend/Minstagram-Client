import styled from "styled-components";

export const Exception = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 30em;
    height: 20em;
    object-fit: cover;
  }
`;

export const ExceptionTitle = styled.div`
  font-size: 3em;
`;

export const HomeBtn = styled.div`
  width: 10em;
  height: 2em;
  background-color: #85c4ff;
  line-height: 2em;
  text-align: center;
  margin-top: 1em;
  color: #fff;
  border-radius: 0.5em;
  cursor: pointer;
`;
