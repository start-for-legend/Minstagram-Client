import styled from "styled-components";

export const PromotionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const PromotionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  overflow-x: hidden;
`;

export const Minstagram = styled.div`
  font-size: 3em;
  text-align: center;
  font-weight: 900;
`;

export const AccountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #c5c5c5;
  height: auto;
  width: 22em;
  svg {
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

export const Register = styled.span`
  cursor: pointer;
  color: blue;
  font-weight: 500;
`;
