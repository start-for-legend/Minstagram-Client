import styled from "styled-components";

interface profileImgProps {
  watched: boolean;
  width?: number;
}

export const ProfileImg = styled.div<profileImgProps>`
  width: ${(props) => props.width || 4}em;
  height: ${(props) => props.width || 4}em;
  background-color: lightblue;
  border-radius: 2em;
  margin-left: 1em;
  display: inline-block;
`;

const ProfileItem = ({ watched, width }: profileImgProps) => {
  return <ProfileImg watched={watched} width={width} />;
};

export default ProfileItem;
