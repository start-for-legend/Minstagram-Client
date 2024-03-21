import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import MsgProfileItem from "./MsgProfileItem";
import { profileTypes } from "../../../types/msgType";
import * as S from "./style";

interface msgTabProps {
  profiles: profileTypes[];
}

const MessageTab = ({ profiles }: msgTabProps) => {
  return (
    <S.msgTab>
      <S.myProfile>
        <span>John_Sana_06</span>
        <FontAwesomeIcon icon={faChevronDown} size="2x" />
        <FontAwesomeIcon icon={faPenToSquare} size="2x" />
      </S.myProfile>
      <S.msgHelp>메세지</S.msgHelp>
      <S.msgProfile>
        {profiles.map((props) => {
          return <MsgProfileItem userId={props.userId} key={props.userId} />;
        })}
      </S.msgProfile>
    </S.msgTab>
  );
};

export default MessageTab;
