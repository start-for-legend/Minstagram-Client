import React, { useRef } from "react";
import { useRecoilValue } from "recoil";

import { reelsModalStateAtom } from "../../../recoil/Atoms/atoms";
import * as S from "./style";

interface containerProps {
  createOver: Function;
  children: React.ReactNode;
}

const CreateReelsContainer = ({ children, createOver }: containerProps) => {
  const modalState = useRecoilValue(reelsModalStateAtom);
  const background = useRef(null);

  return (
    <S.CreatePostContainer
      ref={background}
      modalState={modalState}
      onClick={(e) => (e.target === background.current ? createOver() : "")}
    >
      {children}
    </S.CreatePostContainer>
  );
};

export default CreateReelsContainer;
