import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  noticeStateAtom,
  reelsModalStateAtom,
  searchStateAtom,
} from "../../../recoil/Atoms/atoms";
import { sideBarItemType, sideBarPageType } from "../../../types/sideBarType";
import * as S from "./style";

interface propsType {
  icon: any;
  name: string;
  pageType?: sideBarPageType;
  itemType?: sideBarItemType;
}

const SideBarItem = ({ pageType, itemType, name, icon }: propsType) => {
  const [searchState, setSearchState] = useRecoilState(searchStateAtom);
  const [noticeState, setNoticeState] = useRecoilState(noticeStateAtom);
  const setReelsModalState = useSetRecoilState(reelsModalStateAtom);
  const curTab = window.location.pathname.split("/");
  const navigate = useNavigate();

  const itemOnClick = () => {
    console.log(curTab);
    if (itemType === "search") {
      setSearchState(true);
      setNoticeState(false);
    } else if (itemType === "create") {
      setReelsModalState(true);
    } else if (itemType === "notice") {
      setSearchState(false);
      setNoticeState(true);
    }
  };

  const pageOnClick = () => {
    console.log(curTab);
    if (curTab[1] !== pageType) {
      setSearchState(false);
      navigate(`../${pageType}`);
    } else {
      setSearchState(false);
    }
  };

  return (
    <S.SidebarItem onClick={pageType ? pageOnClick : itemOnClick}>
      <FontAwesomeIcon icon={icon} size="2x" />
      {noticeState || searchState || curTab[1] === "message" ? (
        ""
      ) : (
        <div>{name}</div>
      )}
    </S.SidebarItem>
  );
};

export default SideBarItem;
