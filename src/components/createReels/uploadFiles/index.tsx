// eslint-disable-next-line no-alert
/* eslint no-underscore-dangle: 0 */

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";

import { API } from "../../../API/API";
import * as S from "./style";

interface uploadFilesTypes {
  imgFileString: string;
  setImgFileString: Function;
  videoFileString: string;
  setVideoFileString: Function;
  isFile: boolean;
  uploadedFile: string;
  setUploadedFile: Function;
}

const UploadFiles = ({
  imgFileString,
  setImgFileString,
  setVideoFileString,
  videoFileString,
  isFile,
  setUploadedFile,
  uploadedFile,
}: uploadFilesTypes) => {
  const [imgFile, setImgFile] = useState<File | null>();
  const [isImg, setIsImg] = useState<boolean>();
  const imgRef = useRef<any>(null);

  const formData = new FormData();

  useEffect(() => {
    if (imgFile instanceof File) {
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
            .then((res) => {
              const url = res.data.awsUrl;
              setUploadedFile(url);
              if (url.slice(-3) === "mp4") setIsImg(false);
              else setIsImg(true);
            })
            .catch((err) => alert("파일 크기가 너무 커요!"));
        } else if (imgFile instanceof File) {
          formData.append("file", imgFile);
          uploadPost();
        } else {
          alert("fuck you");
        }
      };

      formData.set("file", imgFile);
      uploadPost();
    }
  }, [imgFile]);

  useEffect(() => {}, [formData]);

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

  return (
    <div>
      {isFile ? (
        <>
          <S.file>
            {imgFileString !== null ? <img src={imgFileString || ""} /> : ""}
            {videoFileString !== null ? (
              <ReactPlayer
                controls
                width="35em"
                height="40em"
                url={videoFileString}
              />
            ) : (
              ""
            )}
          </S.file>
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
            }}
            accept=".jpg,.jpeg,.png,.gif,.mp4"
          />
        </>
      ) : (
        <S.UploadFlex>
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
            }}
            accept=".jpg,.jpeg,.png,.gif,.mp4"
          />
        </S.UploadFlex>
      )}
    </div>
  );
};

export default UploadFiles;
