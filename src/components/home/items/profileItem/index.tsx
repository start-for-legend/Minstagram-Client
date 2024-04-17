import styled from "styled-components";

interface profileImgProps {
  watched: boolean;
  width?: number;
  marginLeft?: number;
  marginTop?: number;
}

export const ProfileImg = styled.div<profileImgProps>`
  width: ${(props) => props.width || 4}em;
  height: ${(props) => props.width || 4}em;
  background-color: lightblue;
  border-radius: 2em;
  margin-left: ${(props) => props.marginLeft || 0}em;
  margin-top: ${(props) => props.marginTop || 0}em;
  display: inline-block;
  float: left;
  margin-right: 0.5em;
`;

const ProfileItem = ({
  watched,
  width,
  marginLeft,
  marginTop,
}: profileImgProps) => {
  return (
    <ProfileImg
      watched={watched}
      width={width}
      marginLeft={marginLeft}
      marginTop={marginTop}
    />
  );
};

export default ProfileItem;
