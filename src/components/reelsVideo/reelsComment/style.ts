import styled from "styled-components";

export const reelsCommentContainer = styled.div`
  position: absolute;
  width: 34em;
  height: 100vh;
  margin-left: 85em;
`;

export const commentTab = styled.div`
  width: 26em;
  height: 47em;
  background-color: white;
  margin-left: 50%;
  margin-top: 100%;
  transform: translate(-50%, -60%);
  border: 2px solid #c5c5c5;
  border-radius: 1em;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const commentBox = styled.div`
  margin-top: 1em;
  width: 25rem;
  height: 40em;
  overflow-x: hidden;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

export const feedContent = styled.div`
  width: 17em;
  word-wrap: break-word;
  height: auto;
  float: left;
  div {
    width: 30em;
  }
  margin-bottom: 2em;
`;

export const commentForm = styled.form`
  width: 22em;
  margin-top: 2em;
  margin-left: 2em;

  #cmtSubmit {
    display: none;
  }

  svg {
    cursor: pointer;
  }
`;

export const commentInput = styled.input`
  border: none;
  outline: none;
  font-size: 1em;
  width: 16rem;
  height: 2.25em;
`;

export const commentContent = styled.div`
  width: 15em;
  float: left;
  margin-bottom: 2em;
  word-wrap: break-word;
`;

export const commentInfo = styled.div`
  color: #c5c5c5;
  margin-left: 3em;
`;

export const commentItemBox = styled.div`
  width: 22em;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
`;

export const cmtLike = styled.div`
  text-align: center;

  svg {
    cursor: pointer;
  }
`;
