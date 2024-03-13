import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./style";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchTab = () => {
  const [searchWord, setSearchWord] = useState("");

  return (
    <S.SearchTab className="box">
      <h2>검색</h2>
      <S.SearchForm>
        <S.SearchInput
          onChange={(e) => setSearchWord(e.target.value)}
          value={searchWord}
          type="text"
          placeholder="검색"
        />
        <FontAwesomeIcon
          onClick={() => {
            setSearchWord("");
          }}
          icon={faCircleXmark}
          size="1x"
        />
      </S.SearchForm>
      <S.SearchResult>
        <h3>최근 검색 항목</h3>
      </S.SearchResult>
    </S.SearchTab>
  );
};

export default SearchTab;
