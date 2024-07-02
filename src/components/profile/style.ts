import styled from "styled-components";

interface profilePropsType {
  searchState: boolean;
}

interface feedGridType {
  curTab: boolean;
}

export const feedGrid = styled.div<feedGridType>`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 55em;

  display: ${(props) => (props.curTab ? "" : "none")};

  grid-template-columns: repeat(3, 1fr);
`;

export const profileContainer = styled.div<profilePropsType>`
  width: calc(100vw - 22em);
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: hidden;
  margin-left: 22em;
`;

export const selectTab = styled.div`
  width: 16em;
`;

export const selectTabItem = styled.div<feedGridType>`
  width: 6em;
  height: 2em;
  line-height: 2em;
  text-align: center;
  cursor: pointer;
  font-size: 1.25em;
  float: left;
  background-color: ${(props) => (props.curTab ? "#c5c5c5" : "")};
  svg {
    padding-right: 0.5em;
  }

  &:hover {
    background-color: #c5c5c5;
  }
`;
