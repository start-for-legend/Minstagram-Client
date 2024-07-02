import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { roomsAtom } from "../../../../recoil/Atoms/atoms";
import { API } from "../../../../API/API";
import { userType } from "../../../../types/userType";
import { followType } from "../../../../types/profileType";
import ProfileItem from "../../../home/items/profileItem";
import * as S from "./style";

interface followUserItemProps {
  element: userType;
  setFollowModal: Function;
  followModal: boolean;
  followState: followType;
}

const FollowUserItem = ({
  element,
  followModal,
  setFollowModal,
  followState,
}: followUserItemProps) => {
  const [followed, setFollowed] = useState(false);
  const navigate = useNavigate();
  const rooms = useRecoilValue(roomsAtom);

  useEffect(() => {
    API({
      method: "get",
      url: `/follow/valid/${element.userId}`,
    }).then((res) => setFollowed(res.data.isTrue));
  }, []);

  const chatOnClick = (userId: number) => {
    API({
      method: "post",
      url: `room/${userId}`,
    })
      .then((res) => {
        if (res.status === 201) {
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          const idx = rooms.findIndex((room) => room.opponentId === userId);
          const targetRoom = rooms[idx];
          const { chatRoomId, opponentId } = targetRoom;
          alert("이미 채팅방이 존재합니다");
          navigate(`/message/${chatRoomId}`, {
            state: { chatRoomId, opponentId },
          });
        }
      });
  };

  const follow = async (apiId: number) => {
    await API({
      method: "post",
      url: `/follow/${apiId}`,
    }).catch((err) => console.log(err));
  };

  return (
    <S.followItem key={element.userId}>
      <Link
        to={`/profile/${element.userId}`}
        onClick={() => setFollowModal(!followModal)}
      >
        <ProfileItem
          profileURL={element.profileUrl}
          watched={false}
          width={3}
        />
        {element.nickName}
      </Link>
      {followState === "chatting" ? (
        <S.followBtn
          onClick={() => {
            if (element.userId) {
              chatOnClick(element.userId);
            }
          }}
        >
          채팅
        </S.followBtn>
      ) : (
        <S.followBtn
          onClick={() =>
            element.userId ? follow(element.userId) : console.log("err")
          }
          backgroundColor={followed ? "#6d6d6d" : "#0095f6"}
        >
          {followed ? "팔로잉" : "팔로우"}
        </S.followBtn>
      )}
    </S.followItem>
  );
};

export default FollowUserItem;
