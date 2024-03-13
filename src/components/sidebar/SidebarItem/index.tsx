import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./style";
import React from "react";
import { useRecoilState } from "recoil";
import { searchStateAtom } from "../../../recoil/Atoms/atoms";
import { sideBarItemType, sideBarPageType } from "../../../types/sideBarType";
import { useNavigate } from "react-router-dom";

interface propsType {
  onClickEvent?: React.MouseEventHandler;
  icon: any;
  name: string;
  pageType?: sideBarPageType;
  itemType?: sideBarItemType;
}

const SideBarItem = (props: propsType) => {
  const [searchState, setSearchState] = useRecoilState(searchStateAtom);
  const curTab = window.location.pathname.substring(1);
  const navigate = useNavigate();
  const { pageType, itemType, name, icon } = props;

  const itemOnClick = () => {
    console.log(itemType);
    if (itemType === "search") {
      setSearchState(!searchState);
    }
  };

  const pageOnClick = () => {
    if (curTab !== pageType) {
      setSearchState(false);
      navigate(`../${pageType}`);
    } else {
      setSearchState(false);
    }
  };

  return (
    <S.SidebarItem
      search={searchState}
      onClick={pageType ? pageOnClick : itemOnClick}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
      {searchState ? "" : <div>{name}</div>}
    </S.SidebarItem>
  );
};

export default SideBarItem;
