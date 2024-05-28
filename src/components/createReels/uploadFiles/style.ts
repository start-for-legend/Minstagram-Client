import styled from "styled-components";

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

export const UploadFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
