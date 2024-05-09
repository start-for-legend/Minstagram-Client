import { useEffect, useState } from "react";
import ReactModal from "react-modal";

import * as S from "./style";
import ProfileItem from "../../../home/items/profileItem";
import { API } from "../../../../API/API";

const ProfileUpload = ({
  profileModal,
  setProfileModal,
}: {
  profileModal: boolean;
  setProfileModal: Function;
}) => {
  const [profileURL, setProfileURL] = useState<string>();
  const [profileFile, setProfileFile] = useState<File | null>();
  const formData = new FormData();

  useEffect(() => {
    if (profileFile instanceof File) {
      const uploadPost = () => {
        if (formData.get("file") !== null) {
          API({
            method: "post",
            url: "/file",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            data: formData,
          })
            .then((res) => setProfileURL(res.data.awsUrl))
            .catch((err) => console.log(err));
        } else if (profileFile instanceof File) {
          formData.append("file", profileFile);
          uploadPost();
        } else {
          alert("fuck you");
        }
      };

      formData.set("file", profileFile);
      uploadPost();
    }
  }, [profileFile]);

  const uploadProfile = () => {
    API({
      method: "patch",
      url: "/user",
      data: {
        awsUrl: profileURL,
      },
    }).then(() => window.location.reload());
  };

  return (
    <ReactModal
      isOpen={profileModal}
      onRequestClose={() => setProfileModal(!profileModal)}
      style={S.profileModalStyles}
    >
      <S.profileUploadContainer>
        <ProfileItem
          watched={false}
          profileURL={profileURL}
          width={15}
          marginTop={1}
        />
        <input
          type="file"
          onChange={(e) =>
            e.target.files
              ? setProfileFile(e.currentTarget.files?.item(0))
              : console.log("asdf")
          }
          accept="image/png, image/jpg"
        />
        <S.commonBtn onClick={uploadProfile}>업로드하기</S.commonBtn>
      </S.profileUploadContainer>
    </ReactModal>
  );
};

export default ProfileUpload;
