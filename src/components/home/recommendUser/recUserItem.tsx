import { API } from "../../../API/API";
import ProfileItem from "../items/profileItem";
import * as S from "./style";

interface recUserItemProps {
  myProfile?: boolean;
  name?: string;
  nickName?: string;
  id?: number;
}

const RecUserItem = ({ myProfile, name, id, nickName }: recUserItemProps) => {
  const followUser = async () => {
    await API({
      method: "post",
      url: `/follow/${id}`,
    }).catch((err) => console.log(err));
  };

  const onFollowClick = async () => {
    await API({
      method: "get",
      url: `/follow/valid/${id}`,
    }).then((res) => {
      if (!res.data.isTrue) {
        followUser();
      } else {
        alert("이미 친구입니다!");
      }
    });
  };

  return (
    <S.ProfileItem>
      <a href={myProfile ? "./profile" : `./profile/${id}`}>
        <ProfileItem watched={false} width={3} />
        <div>{nickName}</div>
        <S.UserName>{name}</S.UserName>
      </a>
      {myProfile ? (
        <S.FollowBtn>변경</S.FollowBtn>
      ) : (
        <S.FollowBtn onClick={onFollowClick}>팔로우</S.FollowBtn>
      )}
    </S.ProfileItem>
  );
};

export default RecUserItem;
