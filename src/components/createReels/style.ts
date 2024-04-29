import styled, { keyframes } from "styled-components";

interface createReelsProps {
  posting: boolean;
}

interface nextBtnProps {
  isFile?: boolean;
}

export const CreateReels = styled.div<createReelsProps>`
  width: ${(props) => (props.posting ? 60 : 40)}em;
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

export const Header = styled.div<createReelsProps>`
  width: ${(props) => (props.posting ? 58 : 38)}rem;
  text-align: center;
  font-size: 1.5em;
  height: 2em;
  line-height: 2em;
  border-bottom: 1px solid #c5c5c5;

  display: flex;
  justify-content: space-between;
`;

export const BackSpace = styled.div`
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
`;

export const NextBtn = styled.div<nextBtnProps>`
  color: #0095f6;
  cursor: pointer;
  visibility: ${(props) => (props.isFile ? "visible" : "hidden")};
`;

export const uploadPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const file = styled.div`
  width: 35em;
  height: 40em;
  background-color: #c5c5c5;
  img {
    width: 35em;
    height: 40em;
    object-fit: cover;
  }
`;

export const inputInfo = styled.div`
  width: 20em;
  height: 47em;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin-left: 1em;

  textarea {
    resize: none;
    width: 18em;
    height: fit-content;
  }
`;

export const hashtagItem = styled.div`
  color: #fff;
  width: fit-content;
  background-color: #0095f6;
  border-radius: 1em;
  padding: 0.5em 0.5em 0.5em 0.5em;
  margin-top: 0.3em;
  svg {
    cursor: pointer;
    margin-left: 1em;
  }
`;
