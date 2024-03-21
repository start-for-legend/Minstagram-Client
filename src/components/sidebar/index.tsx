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
import { useRecoilState } from "recoil";

import { searchStateAtom } from "../../recoil/Atoms/atoms";
import { LightLogo } from "../../assets/files";
import SideBarItem from "./SidebarItem";
import SearchTab from "./SearchTab";
import * as S from "./style";

const Sidebar = () => {
  const [searchState, setSearchState] = useRecoilState(searchStateAtom);
  const curLocation = window.location.pathname.split("/");

  return (
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
  );
};

export default Sidebar;
