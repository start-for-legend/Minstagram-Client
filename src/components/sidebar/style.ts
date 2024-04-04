import styled from "styled-components";

interface sideBarProps {
  search: boolean;
  curLocation: string;
}

export const SideBarContainer = styled.div`
  position: fixed;
  .box {
    float: left;
  }
`;

export const SidebarBox = styled.div<any>`
  width: ${({ search, curLocation }: sideBarProps) =>
    search || curLocation === "message" ? "6em" : "22em"};
  height: 100vh;
  border-right: 1px solid #c5c5c5;
  display: flex;
  flex-direction: column;
  text-indent: 1em;

  :last-child {
    margin-top: auto;
    margin-bottom: 1em;
  }
`;

export const LogoBox = styled.div`
  cursor: pointer;
  height: 5em;
  width: 100%;
  margin-top: 1em;
`;
