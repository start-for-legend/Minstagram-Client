import styled from "styled-components";

interface modalState {
  modalState: boolean;
}

export const CreatePostContainer = styled.div<modalState>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  color: #000;
  display: ${(props) => (props.modalState ? "" : "none")};
  z-index: 1;
`;
