import styled from "styled-components";

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IdInput = styled.input`
  width: 20rem;
  height: 2em;
  margin-bottom: 0.33em;
  border-radius: 2px;
  border: 1px solid #c5c5c5;
  text-indent: 0.25em;
`;

export const LoginBtn = styled.button`
  width: 20.5rem;
  height: 2rem;
  background-color: #85c4ff;
  border: none;
  color: #fff;
  border-radius: 5px;
  margin-top: 0.5em;
  cursor: pointer;
`;

export const OtherTool = styled.div`
  float: left;
  margin-top: 1em;
  margin-bottom: 0.5em;
  span {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }
  hr {
    display: inline-block;
    width: 8rem;
  }
`;

export const AnyBox = styled.div`
  width: 20.5rem;
  border: 1px solid #c5c5c5;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  margin-bottom: 1em;
  margin-top: 0.5em;
`;
