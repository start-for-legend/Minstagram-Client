// eslint-disable-next-line no-alert
/* eslint no-underscore-dangle: 0 */

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { faArrowLeft, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { reelsModalStateAtom } from "../../recoil/Atoms/atoms";
import CreateReelsContainer from "./background";
import * as S from "./style";
import UploadFiles from "./uploadFiles";
import { API } from "../../API/API";

const CreatePost = () => {
  const [modalState, setModalState] = useRecoilState(reelsModalStateAtom);
  const [posting, setPosting] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const [hashtag, setHashtag] = useState<string>("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [imgFileString, setImgFileString] = useState<any>();
  const [videoFileString, setVideoFileString] = useState<any>();
  const [uploadedFile, setUploadedFile] = useState<string>("");

  const isFile = imgFileString || videoFileString;

  useEffect(() => {
    console.log(hashtags);
  }, [hashtags]);

  const addHashtags = () => {
    const hash = hashtag.replace("\n", "");
    if (!hashtags.includes(hash)) {
      setHashtags((prevArray) => [...prevArray, hash]);
      setHashtag("");
    } else {
      alert("이미 있는 태그입니다!");
      setHashtag("");
    }
  };

  const onRemoveHashTag = (ht: string) => {
    setHashtags(hashtags.filter((tag) => tag !== ht));
  };

  const onKeyPress = (e: any) => {
    if (
      e.nativeEvent.isComposing === false &&
      e.code === "Enter" &&
      e.target.value !== ""
    ) {
      addHashtags();
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

  const postApi = async () => {
    if (content !== "" && hashtags.length !== 0 && isFile) {
      await API({
        method: "post",
        url: "/feed",
        data: {
          content,
          hashtags,
          url: [uploadedFile],
        },
      })
        .then((res) =>
          res.status === 201 ? setModalState(false) : console.log("not Posted")
        )
        .then((err) => console.log(err));
    }
  };

  return (
    <CreateReelsContainer createOver={createOver}>
      <S.CreateReels posting={posting}>
        <S.Header posting={posting}>
          <S.BackSpace onClick={posting ? () => setPosting(false) : createOver}>
            <FontAwesomeIcon icon={faArrowLeft} size="1x" />
          </S.BackSpace>
          새 게시물 만들기
          <S.NextBtn
            isFile={isFile}
            onClick={() => (posting ? postApi() : setPosting(true))}
          >
            {posting ? "게시하기" : "다음"}
          </S.NextBtn>
        </S.Header>
        {posting ? (
          <S.uploadPost>
            <S.file>
              <img src={imgFileString} />
            </S.file>
            <S.inputInfo>
              <h2>본문</h2>
              <textarea
                placeholder="asdf"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <h2>태그</h2>
              <textarea
                placeholder="태그를 입력하고 엔터키를 입력하세요"
                value={hashtag}
                onChange={(e) => setHashtag(e.target.value)}
                onKeyUp={(e) => onKeyPress(e)}
              />
              {hashtags.map((element) => {
                return (
                  <S.hashtagItem key={element}>
                    {element}
                    <FontAwesomeIcon
                      onClick={() => onRemoveHashTag(element)}
                      icon={faCircleXmark}
                      color="#fff"
                    />
                  </S.hashtagItem>
                );
              })}
            </S.inputInfo>
          </S.uploadPost>
        ) : (
          <UploadFiles
            imgFileString={imgFileString}
            videoFileString={videoFileString}
            setImgFileString={setImgFileString}
            setVideoFileString={setVideoFileString}
            isFile={isFile}
            uploadedFile={uploadedFile}
            setUploadedFile={setUploadedFile}
          />
        )}
      </S.CreateReels>
    </CreateReelsContainer>
  );
};

export default CreatePost;
