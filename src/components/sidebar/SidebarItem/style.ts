import styled from "styled-components";

interface propsType {
  search: boolean;
}

export const SidebarItem = styled.div<propsType>`
  padding-top: 1em;
  width: ${(props) => (props.search ? "5em" : "100%")};
  cursor: pointer;
  height: 3.5em;

  svg {
    width: 2.3em;
  }

  &:hover {
    background-color: #c5c5c5;
  }

  div {
    display: inline-block;
    margin-left: 0.5em;
    font-weight: 900;
    font-size: 1.5em;
  }
`;
