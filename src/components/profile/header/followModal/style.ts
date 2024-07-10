import ReactModal from "react-modal";
import styled from "styled-components";

interface followBtnProps {
  backgroundColor?: string;
}

export const followModalStyles: ReactModal.Styles = {
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
    width: "30rem",
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
    overflowY: "auto",
    flexDirection: "column",
  },
};

export const followHeader = styled.div`
  width: 30rem;
  font-size: 2em;
  height: 2rem;
  text-align: center;
  margin-bottom: 1em;
`;

export const followContainer = styled.div`
  width: 30em;
  height: 27em;
`;

export const followItem = styled.div`
  display: flex;
  width: 28rem;
  height: 3rem;
  margin-bottom: 0.5rem;
  line-height: 3rem;
  padding-left: 0.5rem;

  a {
    font-size: 1.25em;
    text-decoration: none;
    color: #000;
  }
`;

export const followBtn = styled.button<followBtnProps>`
  width: 4.25em;
  height: 2em;
  font-size: 1.25em;
  background-color: ${(props) => props.backgroundColor || "#0095f6"};
  color: #fff;
  border: none;
  margin-left: auto;
  border-radius: 0.25em;
  cursor: pointer;
`;
