import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import MsgProfileItem from "./MsgProfileItem";
import * as S from "./style";

const MessageTab = () => {
  return (
    <S.msgTab>
      <S.myProfile>
        <span>John_Sana_06</span>
        <FontAwesomeIcon icon={faChevronDown} size="2x" />
        <FontAwesomeIcon icon={faPenToSquare} size="2x" />
      </S.myProfile>
      <S.msgHelp>메세지</S.msgHelp>
      <S.msgProfile>
        <MsgProfileItem />
        <MsgProfileItem />
        <MsgProfileItem />
        <MsgProfileItem />
        <MsgProfileItem />
        <MsgProfileItem />
        <MsgProfileItem />
        <MsgProfileItem />
        <MsgProfileItem />
        <MsgProfileItem />
        <MsgProfileItem />
        <MsgProfileItem />
        <MsgProfileItem />
        <MsgProfileItem />
      </S.msgProfile>
    </S.msgTab>
  );
};

export default MessageTab;
