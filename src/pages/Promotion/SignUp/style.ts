import styled from "styled-components";

interface samePwType {
  samePwState?: boolean;
}

export const IdInput = styled.input`
  width: 20em;
  height: 2em;
  margin-bottom: 0.33em;
  border-radius: 2px;
  border: 1px solid #c5c5c5;
  text-indent: 0.25em;
  ime-mode: active;

  &:invalid {
    outline: red;
    border-color: red;
  }
`;

export const PwInput = styled.input<samePwType>`
  width: 20em;
  height: 2em;
  margin-bottom: 0.33em;
  border-radius: 2px;
  text-indent: 0.25em;
  border: 1px solid ${(props) => (props.samePwState ? "#c5c5c5" : "red")};
  outline: 1px solid ${(props) => (props.samePwState ? "#c5c5c5" : "red")};
`;

export const PhoneInput = styled.input`
  width: 15em;
  height: 2em;
  margin-bottom: 0.33em;
  border-radius: 2px;
  border: 1px solid #c5c5c5;
  text-indent: 0.25em;
  float: left;
  margin-right: 1em;
`;

export const VerifyBtn = styled.button`
  width: 4em;
  height: 2.2em;
  margin-bottom: 0.33em;
  border-radius: 4px;
  border: 1px solid #c5c5c5;
  text-indent: 0.25em;
  background-color: #85c4ff;
  color: #fff;
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
    width: 8em;
  }
`;

export const samePw = styled.div<samePwType>`
  color: red;
  display: ${(props) => (props.samePwState ? "none" : "")};
`;

export const RegisterBtn = styled.div`
  width: 20.5em;
  height: 2em;
  background-color: #85c4ff;
  border: none;
  color: #fff;
  border-radius: 5px;
  margin-top: 0.5em;
  text-align: center;
  line-height: 2em;
  cursor: pointer;
`;

export const hiddenInput = styled.input`
  display: none;
`;
