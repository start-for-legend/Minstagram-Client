import ReactModal from "react-modal";
import styled from "styled-components";

export const feedModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "0",
    position: "fixed",
    top: "0",
    left: "0",
    overflowY: "hidden",
  },
  content: {
    padding: `0 0 0 0`,
    width: "90em",
    height: "52em",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1em",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    overflow: "hidden",
    display: "flex",
  },
};

export const modalImg = styled.div`
  width: 52em;
  height: 52em;
  word-wrap: break-word;
  background-color: #c5c5c5;
  float: left;

  img {
    object-fit: contain;
    max-width: 52em;
    height: 52em;
    margin-left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const modalHeader = styled.div`
  width: 36em;
  height: 3em;
  line-height: 3em;
  display: flex;
  border-bottom: 1px solid #c5c5c5;
  padding-left: 1em;
  padding-bottom: 1em;

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
  min-height: 1em;
  padding-left: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: start;
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
  }
`;

export const feedContent = styled.div`
  width: 32em;
  height: auto;
  div {
    width: 30em;
  }
  margin-bottom: 2em;
`;

export const commentFlex = styled.div`
  display: flex;
  width: 34em;
`;

export const commentContent = styled.div`
  width: 28em;
`;

export const commentInfo = styled.div`
  color: #c5c5c5;
  width: 30em;
`;

export const commentContainer = styled.div`
  width: 40em;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const right = styled.div`
  margin-top: 1em;
  height: 48em;
  overflow: hidden;
`;

export const commentScrollContainer = styled.div`
  height: 40em;
  width: 38.5em;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
`;

export const heartCount = styled.div`
  text-align: center;
`;
