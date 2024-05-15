import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { Link, useNavigate } from "react-router-dom";

import ProfileItem from "../../../home/items/profileItem";
import { API } from "../../../../API/API";
import * as S from "./style";
import { followType } from "../../../../types/profileType";
import { userType } from "../../../../types/userType";

const FollowModal = ({
  followModal,
  followState,
  setFollowModal,
  id,
}: {
  followModal: boolean;
  followState: followType;
  setFollowModal: Function;
  id?: number;
}) => {
  const [follows, setFollows] = useState<userType[]>([]);
  const navigate = useNavigate();

  const getFollower = async () => {
    if (followState && id) {
      await API({
        method: "get",
        url: `/follow/${followState === "follower" ? "follower" : "following"}/${id}`,
      }).then((res) => setFollows(res.data));
    }
  };

  const follow = async (apiId: number) => {
    await API({
      method: "post",
      url: `/follow/${apiId}`,
    }).catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log();
    getFollower();
  }, [followState]);

  const chatOnClick = (userId: number) => {
    API({
      method: "post",
      url: `room/${userId}`,
    })
      .then((res) => {
        if (res.status === 201) {
          navigate(`/message/${userId}`);
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert("이미 채팅방이 존재합니다");
          navigate(`/message/${userId}`);
        }
      });
  };

  return (
    <ReactModal
      isOpen={followModal}
      onRequestClose={() => {
        setFollowModal(!followModal);
      }}
      style={S.followModalStyles}
    >
      <S.followHeader>
        {followState === "follower" ? "팔로워" : "팔로잉"}
      </S.followHeader>
      {follows.map((element) => {
        return (
          <S.followItem key={element.userId}>
            <Link to={`/profile/${element.userId}`}>
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
              >
                팔로우
              </S.followBtn>
            )}
          </S.followItem>
        );
      })}
    </ReactModal>
  );
};

export default FollowModal;
