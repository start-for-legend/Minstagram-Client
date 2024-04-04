import { ReactNode } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { searchStateAtom } from "../../recoil/Atoms/atoms";

interface ReelsPropsType {
  searchState: boolean;
  alignItem?: string;
  heightVh?: number;
  paddingTopEm?: number;
  isStatic?: boolean;
}

const ReelsContainer = styled.div<ReelsPropsType>`
  width: calc(
    100vw -
      ${({ searchState, isStatic }) =>
        searchState && !isStatic ? "22em" : "6    em"}
  );
  height: ${(props) => (props.heightVh ? `${props.heightVh}vh` : "100vh")};
  margin-left: ${({ searchState, isStatic }) =>
    searchState && !isStatic ? "30em" : "6em"};
  display: flex;
  justify-content: center;
  align-items: ${({ alignItem }) => alignItem || "center"};
  padding-top: ${({ paddingTopEm }) => `${paddingTopEm}em` || "0"};
`;
type containerProps = {
  children: ReactNode;
  alignItem?: string;
  heightVh?: number;
  paddingTopEm?: number;
  isStatic?: boolean;
};

const PageContainer = ({
  children,
  alignItem,
  heightVh,
  paddingTopEm,
  isStatic,
}: containerProps) => {
  const searchState = useRecoilValue(searchStateAtom);
  return (
    <ReelsContainer
      heightVh={heightVh || undefined}
      alignItem={alignItem || undefined}
      searchState={searchState}
      paddingTopEm={paddingTopEm}
      isStatic={isStatic}
    >
      {children}
    </ReelsContainer>
  );
};

export default PageContainer;
