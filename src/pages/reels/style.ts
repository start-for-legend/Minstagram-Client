import styled from "styled-components";

interface reelsPropsType {
  searchState: boolean;
}

export const ReelsContainer = styled.div<reelsPropsType>`
  width: calc("100vw" - ${(props) => (props.searchState ? "36em" : "52em")});
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ReelsBtnContainer = styled.div`
  height: 2.5vh;

  button {
    width: 5em;
    margin-left: 12.5em;
    border: none;
    cursor: pointer;
    z-index: 2;
  }
`;
