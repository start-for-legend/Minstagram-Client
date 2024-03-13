import styled from "styled-components";
import { styleProps } from "./files";

export const Nkunku = styled.div<styleProps>`
  img {
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
  }

  margin-right: 2em;
`;

export const Logo = styled.div``;
