import styled from "styled-components";

interface reelsPropsType {
  searchState: boolean;
}

export const ExploreContainer = styled.div<reelsPropsType>`
  width: calc(100vw - 22em);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 22em;
  overflow-y: auto;
`;
