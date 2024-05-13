import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faEllipsis, faUserFriends } from "@fortawesome/free-solid-svg-icons";

import ProfileItem from "../../home/items/profileItem";
import { userResponseAtom } from "../../../recoil/Atoms/atoms";
import * as S from "./style";
import ProfileUpload from "./profileUpload";
import FollowModal from "./followModal";
import { followType } from "../../../types/profileType";
import { API } from "../../../API/API";

interface profileHeaderProps {
  myProfile?: boolean;
  followValid: boolean;
  setFollowValid: Function;
}

const ProfileHeader = ({
  followValid,
  myProfile,
  setFollowValid,
}: profileHeaderProps) => {
  const userResponse = useRecoilValue(userResponseAtom);
  const [profileModal, setProfileModal] = useState(false);
  const [followModal, setFollowModal] = useState(false);
  const [follow, setFollow] = useState<followType>();

  useEffect(() => {
    console.log(userResponse);
  }, [userResponse]);

  const userFollow = (valid: boolean) => {
    API({
      method: valid ? "delete" : "post",
      url: `/follow/${userResponse.userId}`,
    }).then((res) => {
      if (res.status === 201) {
        setFollowValid(true);
      } else if (res.status === 204) {
        setFollowValid(false);
      }
    });
  };

  const followOnClick = () => {
    if (
      window.confirm(
        followValid ? "정말로 언팔로우 하시겠습니까?" : "팔로우 하시겠습니까?"
      )
    ) {
      userFollow(followValid);
    }
  };

  return (
    <S.profileHeader>
      <S.profileDiv onClick={() => setProfileModal(!profileModal)}>
        <ProfileItem
          watched={false}
          width={10}
          profileURL={userResponse.profileUrl}
        />
      </S.profileDiv>
      <S.profileHeaderItem>
        <S.userName>{userResponse?.nickName}</S.userName>
        <S.followBtn
          onClick={() =>
            myProfile
              ? alert(`나 자신은 팔로우 할 수 없습니다!`)
              : followOnClick()
          }
        >
          {followValid ? "팔로잉" : " 팔로우"}
        </S.followBtn>
        <S.followBtn>메세지 보내기</S.followBtn>
        <S.followBtn>
          <FontAwesomeIcon icon={faUserFriends} />
        </S.followBtn>
        <FontAwesomeIcon icon={faEllipsis} size="2x" />
        <S.userInfo>
          <span>게시물 {userResponse?.feeds.length}</span>
          <span
            role="button"
            tabIndex={0}
            onClick={() => {
              setFollowModal(!followModal);
              setFollow("follower");
            }}
          >
            팔로워 {userResponse?.follower}
          </span>
          <span
            role="button"
            tabIndex={0}
            onClick={() => {
              setFollowModal(!followModal);
              setFollow("following");
            }}
          >
            팔로잉 {userResponse?.following}
          </span>
        </S.userInfo>
      </S.profileHeaderItem>
      <ProfileUpload
        profileModal={profileModal}
        setProfileModal={setProfileModal}
      />
      <FollowModal
        id={userResponse.userId}
        followState={follow}
        followModal={followModal}
        setFollowModal={setFollowModal}
      />
    </S.profileHeader>
  );
};

export default ProfileHeader;
