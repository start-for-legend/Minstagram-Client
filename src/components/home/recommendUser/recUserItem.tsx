import ProfileItem from "../items/profileItem";
import * as S from "./style";

interface recUserItemProps {
  myProfile?: boolean;
  name: string;
  id: string;
}

const RecUserItem = ({ myProfile, name, id }: recUserItemProps) => {
  return (
    <S.ProfileItem>
      <div>
        <ProfileItem watched={false} width={3} />
        <div>{id}</div>
        <S.UserName>{name}</S.UserName>
      </div>
      {myProfile ? (
        <S.FollowBtn>변경</S.FollowBtn>
      ) : (
        <S.FollowBtn>팔로우</S.FollowBtn>
      )}
    </S.ProfileItem>
  );
};

export default RecUserItem;
