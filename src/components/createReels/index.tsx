// eslint-disable-next-line no-alert
/* eslint no-underscore-dangle: 0 */

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { faArrowLeft, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";

import { API } from "../../API/API";
import { reelsModalStateAtom } from "../../recoil/Atoms/atoms";
import CreateReelsContainer from "./background";
import * as S from "./style";

const CreatePost = () => {
  const [modalState, setModalState] = useRecoilState(reelsModalStateAtom);
  const [imgFile, setImgFile] = useState<File | null>();
  const [imgFileString, setImgFileString] = useState<any>();
  const [videoFile, setVideoFile] = useState<File | null>();
  const [videoFileString, setVideoFileString] = useState<any>();
  const imgRef = useRef<any>(null);
  const isFile = imgFileString || videoFileString;

  const formData = new FormData();

  useEffect(() => {
    if (imgFile instanceof File) {
      formData.set("file", imgFile);
    }
    if (videoFile instanceof File) {
      formData.set("file", videoFile);
    }
  }, [imgFile, videoFile]);

  const saveReelsFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const _file = e.currentTarget.files?.item(0);
    const _fileType = _file?.type.split("/")[0];

    if (_file) {
      const reader = new FileReader();
      reader.readAsDataURL(_file);
      reader.onload = () => {
        if (_fileType === "video" && reader.result !== null) {
          setVideoFileString(reader.result);
          setImgFileString(null);
        } else if (_fileType === "image") {
          setImgFileString(reader.result);
          setVideoFileString(null);
        }
      };
    }
  };

  const createOver = () => {
    if (isFile) {
      const _result = window.confirm("정말 그만두시겠어요?");
      if (_result === true) {
        setModalState(!modalState);
      } else {
        console.log("nono");
      }
    } else {
      setModalState(!modalState);
    }
  };

  const uploadPost = () => {
    if (formData.get("file") !== null) {
      console.log(formData.get("file"));
      API({
        method: "post",
        url: "/file",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else if (imgFile instanceof File) {
      formData.append("file", imgFile);
      uploadPost();
    } else {
      console.log("fuck you");
    }
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
            {imgFileString !== null ? (
              <img src={imgFileString || ""} />
            ) : (
              "Loading..."
            )}
            {videoFileString !== null ? (
              <ReactPlayer
                controls
                width="auto"
                height="20em"
                url={videoFileString}
              />
            ) : (
              "Loading..."
            )}
            <label htmlFor="fileBtn">
              <S.FileBtn>다른 파일 선택</S.FileBtn>
            </label>
            <input
              ref={imgRef}
              type="file"
              id="fileBtn"
              onChange={(e) => {
                saveReelsFile(e);
                setImgFile(e.currentTarget.files?.item(0));
                setVideoFile(e.currentTarget.files?.item(0));
              }}
              accept=".png,.gif"
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
              onChange={(e) => {
                saveReelsFile(e);
                setImgFile(e.currentTarget.files?.item(0));
                setVideoFile(e.currentTarget.files?.item(0));
              }}
              accept=".png,.gif"
            />
          </>
        )}
      </S.CreateReels>
    </CreateReelsContainer>
  );
};

export default CreatePost;
