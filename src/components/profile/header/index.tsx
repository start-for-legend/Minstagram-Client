import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { faEllipsis, faUserFriends } from "@fortawesome/free-solid-svg-icons";

import ProfileItem from "../../home/items/profileItem";
import { userResponseAtom } from "../../../recoil/Atoms/atoms";
import * as S from "./style";

const ProfileHeader = () => {
  const userResponse = useRecoilValue(userResponseAtom);
  useEffect(() => {
    console.log(userResponse);
  }, [userResponse]);
  return (
    <S.profileHeader>
      <S.profileDiv>
        <ProfileItem watched={false} width={10} />
      </S.profileDiv>
      <S.profileHeaderItem>
        <S.userName>{userResponse?.nickName}</S.userName>
        <S.followBtn>팔로우</S.followBtn>
        <S.followBtn>메세지 보내기</S.followBtn>
        <S.followBtn>
          <FontAwesomeIcon icon={faUserFriends} />
        </S.followBtn>
        <FontAwesomeIcon icon={faEllipsis} size="2x" />
        <S.userInfo>
          <span>게시물 {userResponse?.feeds.length}</span>
          <span>팔로워 {userResponse?.follower}</span>
          <span>팔로잉 {userResponse?.following}</span>
        </S.userInfo>
      </S.profileHeaderItem>
    </S.profileHeader>
  );
};

export default ProfileHeader;
