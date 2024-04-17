import styled from "styled-components";

export const CreateReels = styled.div`
  width: 40em;
  height: 50em;
  background-color: #fff;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  .filmSvg {
    padding-top: 2.5em;
  }

  input {
    display: none;
  }
`;

export const Header = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  height: 2em;
  line-height: 2em;
  border-bottom: 1px solid #c5c5c5;
  margin-left: -4em;

  svg {
    margin-right: auto;
  }
`;

export const BackSpace = styled.div`
  width: 1.5em;
  height: 1.5em;
  margin-right: auto;
  float: left;
  margin-left: 4em;
  cursor: pointer;
`;

export const ReelsTitle = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 1em;
`;

export const FileBtn = styled.div`
  width: 8rem;
  height: 2rem;
  background-color: #0095f6;
  text-align: center;
  line-height: 2em;
  color: white;
  border-radius: 0.5em;
  margin-top: 0.5em;
  cursor: pointer;
`;
