import styled from "styled-components";

interface profileImgProps {
  watched: boolean;
  width?: number;
  marginLeft?: number;
  marginTop?: number;
  profileURL?: string;
}

export const ProfileImg = styled.div<profileImgProps>`
  width: ${(props) => props.width || 4}em;
  height: ${(props) => props.width || 4}em;
  border-radius: ${(props) => props.width || -1}em;
  margin-left: ${(props) => props.marginLeft || 0}em;
  margin-top: ${(props) => props.marginTop || 0}em;
  float: left;
  margin-right: 0.5em;
  background-image: url(${(props) => props.profileURL || ""});
  background-size: cover;
  background-color: #000;
`;

const ProfileItem = ({
  watched,
  width,
  marginLeft,
  marginTop,
  profileURL,
}: profileImgProps) => {
  return (
    <ProfileImg
      watched={watched}
      width={width}
      marginLeft={marginLeft}
      marginTop={marginTop}
      profileURL={profileURL}
    />
  );
};

export default ProfileItem;
