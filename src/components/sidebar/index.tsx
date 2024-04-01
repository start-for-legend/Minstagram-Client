import {
  faBars,
  faBell,
  faCirclePlus,
  faClapperboard,
  faCompass,
  faHouse,
  faMagnifyingGlass,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { reelsModalStateAtom, searchStateAtom } from "../../recoil/Atoms/atoms";
import { LightLogo } from "../../assets/files";
import SideBarItem from "./SidebarItem";
import SearchTab from "./SearchTab";
import * as S from "./style";
import CreateReels from "../createReels";

const Sidebar = () => {
  const searchState = useRecoilValue(searchStateAtom);
  const curLocation = window.location.pathname.split("/");
  const reelsModalState = useRecoilValue(reelsModalStateAtom);
  return (
    <>
      <S.SideBarContainer>
        <S.SidebarBox
          className="box"
          search={searchState}
          curLocation={curLocation[1]}
        >
          <S.LogoBox>
            <LightLogo width="4em" height="4em" />
          </S.LogoBox>
          <SideBarItem icon={faHouse} name="홈" pageType="home" />
          <SideBarItem icon={faMagnifyingGlass} name="검색" itemType="search" />
          <SideBarItem icon={faCompass} name="탐색 탭" pageType="explore" />
          <SideBarItem icon={faClapperboard} name="릴스" pageType="reels" />
          <SideBarItem icon={faMessage} name="메시지" pageType="message" />
          <SideBarItem icon={faBell} name="알림" itemType="alert" />
          <SideBarItem icon={faCirclePlus} name="만들기" itemType="create" />
          <SideBarItem icon={faHouse} name="프로필" pageType="profile" />
          <div>현재 상태 : {searchState}</div>
          <SideBarItem icon={faBars} name="더 보기" itemType="further" />
        </S.SidebarBox>
        {searchState ? <SearchTab /> : ""}
      </S.SideBarContainer>
      {reelsModalState ? <CreateReels /> : ""}
    </>
  );
};

export default Sidebar;
