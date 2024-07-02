import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useRecoilValue } from "recoil";
import { Link, useNavigate } from "react-router-dom";

import ProfileItem from "../../../home/items/profileItem";
import { API } from "../../../../API/API";
import * as S from "./style";
import { followType } from "../../../../types/profileType";
import { userType } from "../../../../types/userType";
import { roomsAtom } from "../../../../recoil/Atoms/atoms";
import FollowUserItem from "./followUserItem";

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

  const getFollower = async () => {
    if (followState && id) {
      await API({
        method: "get",
        url: `/follow/${followState === "follower" ? "follower" : "following"}/${id}`,
      }).then((res) => setFollows(res.data));
    }
  };

  useEffect(() => {
    console.log();
    getFollower();
  }, [followState]);

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
          <FollowUserItem
            key={element.userId}
            element={element}
            followModal={followModal}
            setFollowModal={setFollowModal}
            followState={followState}
          />
        );
      })}
    </ReactModal>
  );
};

export default FollowModal;
