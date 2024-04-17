import styled from "styled-components";

import { styleProps } from "../types/files";

export const Nkunku = styled.div<styleProps>`
  img {
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
  }
`;

export const Logo = styled.div``;
