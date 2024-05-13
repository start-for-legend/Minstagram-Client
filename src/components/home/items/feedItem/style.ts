import styled from "styled-components";

export const FeedItem = styled.div`
  width: 35em;
  height: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  border-bottom: 1px solid #000;

  svg {
    margin-left: auto;
    cursor: pointer;
  }
`;

export const FeedHeader = styled.div`
  display: flex;
  align-items: center;
  height: 4em;
`;

export const ProfileName = styled.span`
  font-size: 1.5em;
  padding-left: 0.5em;
`;

export const UploadTime = styled.div`
  color: gray;
  font-size: 1.25em;
  padding-left: 0.5em;
`;

export const FeedImg = styled.div`
  width: 35em;
  height: 40em;
  background-color: black;

  img {
    max-width: 35em;
    height: 40em;
    object-fit: contain;
    margin-left: 50%;
    transform: translate(-50%, 0);
  }
`;

interface footerProps {
  like: boolean;
}

export const FeedFooter = styled.div<footerProps>`
  width: 35em;
  height: auto;
  margin-top: 1em;

  div {
    margin-bottom: 0.25em;
  }

  .bm {
    margin-left: auto;
  }

  svg {
    margin-right: 0.5em;
  }

  svg:hover {
    color: ${(props) => (props.like ? "red" : "gray")};
  }
`;

export const FeedTitle = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;

export const Comment = styled.div`
  cursor: pointer;
  &:hover {
    color: #c5c5c5;
  }
`;

export const Hashtags = styled.div`
  color: lightblue;
`;
