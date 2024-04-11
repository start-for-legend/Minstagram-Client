import ReactModal from "react-modal";
import styled from "styled-components";

export const feedModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
    overflowY: "hidden",
  },
  content: {
    width: "80em",
    height: "48em",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1em",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
    display: "flex",
  },
};

export const modalImg = styled.div`
  width: 42em;
  height: 48em;
  word-wrap: break-word;
  background-color: #c5c5c5;
  float: left;

  img {
    max-width: 42em;
    height: 48em;
    margin-left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const modalHeader = styled.div`
  width: 38em;
  height: 3em;
  line-height: 3em;
  display: flex;
  svg {
    margin-left: auto;
    cursor: pointer;
  }
`;

export const profileName = styled.div`
  font-size: 1.5em;
  margin-left: 0.5em;
`;

export const followBtn = styled.div`
  color: lightblue;
  margin-left: 1em;
  font-size: 1.5em;
  cursor: pointer;
`;

export const commentItem = styled.div`
  width: 38em;
  padding-left: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  svg:hover {
    transform: scale(1.25);
    transition-duration: 0.25s;
  }
`;

export const commentTab = styled.div`
  margin-left: 1em;

  span {
    font-family: 900;
    padding-right: 1em;
    float: left;
  }
`;

export const feedContent = styled.div`
  width: 34em;
  height: auto;
  float: left;
  div {
    width: 30em;
  }
  margin-bottom: 2em;
`;

export const commentContent = styled.div`
  width: 30em;
  float: left;
`;

export const commentInfo = styled.div`
  color: #c5c5c5;
  width: 30em;
  margin-left: 3em;
`;

export const commentContainer = styled.div`
  width: 40em;
  height: auto;
  overflow-x: hidden;
`;

export const right = styled.div`
  height: 48em;
  overflow-x: hidden;
  overflow-y: auto;
`;
