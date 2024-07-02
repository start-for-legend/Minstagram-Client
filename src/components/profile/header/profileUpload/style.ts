import ReactModal from "react-modal";
import styled from "styled-components";

export const profileModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "100",
    position: "fixed",
    top: "0",
    left: "0",
    overflowY: "hidden",
  },

  content: {
    padding: `0 0 0 0`,
    width: "30em",
    height: "40em",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1em",
    backgroundColor: "white",
    overflow: "hidden",
    display: "flex",
  },
};

export const profileUploadContainer = styled.div`
  width: 30em;
  height: 40em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const commonBtn = styled.button`
  width: 7em;
  font-size: 1.25em;
  height: 1.75em;
  background-color: #0095f6;
  border-radius: 0.25em;
  border: none;
  color: #fff;
  margin-top: 1em;
  cursor: pointer;
`;
