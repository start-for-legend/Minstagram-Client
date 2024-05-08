import ProfileItem from "../items/profileItem";
import * as S from "./style";

interface recUserItemProps {
  myProfile?: boolean;
  name?: string;
  nickName?: string;
  id?: number;
}

const RecUserItem = ({ myProfile, name, id, nickName }: recUserItemProps) => {
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
        <S.FollowBtn>팔로우</S.FollowBtn>
      )}
    </S.ProfileItem>
  );
};

export default RecUserItem;
