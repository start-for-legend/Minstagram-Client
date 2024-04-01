// eslint-disable-next-line no-alert
/* eslint no-underscore-dangle: 0 */

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

import { reelsModalStateAtom } from "../../recoil/Atoms/atoms";
import * as S from "./style";
import CreateReelsContainer from "./background";
import { API } from "../../API/API";

const CreatePost = () => {
  const [modalState, setModalState] = useRecoilState(reelsModalStateAtom);
  const [imgFile, setImgFile] = useState<File | null>();
  const [imgFileString, setImgFileString] = useState<any>();
  const [videoFile, setVideoFile] = useState<File | null>();
  const [videoFileString, setVideoFileString] = useState<any>();
  const imgRef = useRef<any>(null);
  const isFile = imgFile || videoFile;

  const formData = new FormData();

  useEffect(() => {
    if (imgFile instanceof File) formData.append("file", imgFile);
  }, [imgFile]);

  /* const saveReelsFile = (e: ChangeEvent<HTMLInputElement>) => {
    const _file = e.currentTarget.files?.item(0);
    const _fileType = _file?.type.split("/")[0];

    if (_file) {
      const reader = new FileReader();
      reader.readAsDataURL(_file);
      reader.onloadend = () => {
        if (_fileType === "video") {
          setVideoFileString(reader.result);
          setImgFile(null);
        } else if (_fileType === "image") {
          setImgFileString(reader.result);
          setVideoFile(null);
        }
      };
    }
  }; */

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const _file = e.currentTarget.files?.item(0);
    if (_file !== null) setImgFile(_file);
    console.log(_file);
  };

  const createOver = () => {
    if (isFile) {
      const _result = window.confirm("정말 그만두시겠어요?");
      if (_result) {
        setModalState(!modalState);
      } else {
        console.log("nono");
      }
      setModalState(!modalState);
    }
  };

  const uploadPost = () => {
    API({
      method: "post",
      url: "/file",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => setImgFileString(res.data.awsUrl))
      .catch((err) => console.log(err));
  };

  return (
    <CreateReelsContainer createOver={createOver}>
      <S.CreateReels>
        <S.Header>
          <S.BackSpace onClick={createOver}>
            <FontAwesomeIcon icon={faArrowLeft} size="1x" />
          </S.BackSpace>
          새 게시물 만들기
        </S.Header>
        {isFile ? (
          <>
            <img src={imgFileString || ""} />
            <ReactPlayer
              controls
              width="auto"
              height="20em"
              url={videoFileString}
            />
            <S.FileBtn onClick={uploadPost}>보내기</S.FileBtn>
          </>
        ) : (
          <>
            <FontAwesomeIcon className="filmSvg" icon={faPhotoFilm} size="5x" />
            <S.ReelsTitle>사진 혹은 동영상을 올리세요</S.ReelsTitle>
            <label htmlFor="fileBtn">
              <S.FileBtn>컴퓨터에서 선택</S.FileBtn>
            </label>
            <input
              ref={imgRef}
              type="file"
              id="fileBtn"
              onChange={(e) => handleUpload(e)}
              accept=".jpg,.png,.gif,.jpeg,.mp4,.avi"
            />
          </>
        )}
      </S.CreateReels>
    </CreateReelsContainer>
  );
};

export default CreatePost;
