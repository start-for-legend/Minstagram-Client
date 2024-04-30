import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { userResponseAtom } from "../../recoil/Atoms/atoms";
import Sidebar from "../../components/sidebar";
import { API } from "../../API/API";
import ProfileComponent from "../../components/profile";

const Profile = () => {
  const setUserResponse = useSetRecoilState(userResponseAtom);
  const params = useParams();
  const myAcc: boolean = !params.userId;

  useEffect(() => {
    const getAcc = async () => {
      await API({
        method: "get",
        url: myAcc ? "/user" : `/user/${params.userId}`,
      })
        .then((res) => setUserResponse(res.data))
        .catch((err) => console.log(err));
    };

    getAcc();
  }, []);
  return (
    <div>
      <Sidebar />
      <ProfileComponent />
    </div>
  );
};

export default Profile;
