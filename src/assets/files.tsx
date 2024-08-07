import ReactPlayer from "react-player";
import styled from "styled-components";

import { styleProps } from "../types/files";

export const Nkunku = styled.div<styleProps>`
  img {
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
    object-fit: cover;
    margin-right: 1em;
  }
`;

export const SIUU = ({ height, width }: styleProps) => {
  return (
    <Nkunku width="20em" height="32.5em">
      <img src={`${process.env.PUBLIC_URL}/files/ronaldo.png`} />
    </Nkunku>
  );
};

export const DarkLogo = ({ height, width }: styleProps) => {
  return (
    <div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? "auto"}
        height={height ?? "auto"}
        viewBox="0 0 161.000000 152.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,152.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M246 1258 c-14 -20 -16 -83 -16 -493 0 -524 -1 -515 64 -515 67 0 65
-8 68 439 l3 403 203 -146 c131 -94 213 -146 229 -146 16 0 96 52 226 145
l202 145 5 -403 c5 -442 5 -437 65 -437 67 0 65 -16 65 517 0 452 -1 481 -18
496 -25 23 -74 21 -105 -3 -82 -64 -431 -310 -441 -310 -7 0 -114 74 -240 165
-187 136 -233 165 -261 165 -24 0 -39 -7 -49 -22z"
          />
          <path
            d="M520 780 c-19 -19 -20 -33 -20 -253 0 -263 3 -277 65 -277 60 0 65
14 65 176 0 79 3 144 6 144 3 0 34 -20 68 -45 81 -57 103 -57 189 0 l67 45 0
-138 c0 -158 8 -182 64 -182 64 0 66 9 66 277 0 220 -2 241 -18 256 -35 32
-88 19 -106 -24 -7 -17 -43 -51 -90 -83 l-79 -55 -76 54 c-42 29 -81 63 -88
76 -26 51 -78 64 -113 29z"
          />
        </g>
      </svg>
    </div>
  );
};

export const LightLogo = ({ height, width }: styleProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "auto"}
      height={height ?? "auto"}
      viewBox="0 0 161.000000 152.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,152.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M246 1258 c-14 -20 -16 -83 -16 -493 0 -524 -1 -515 64 -515 67 0 65
-8 68 439 l3 403 203 -146 c131 -94 213 -146 229 -146 16 0 96 52 226 145
l202 145 5 -403 c5 -442 5 -437 65 -437 67 0 65 -16 65 517 0 452 -1 481 -18
496 -25 23 -74 21 -105 -3 -82 -64 -431 -310 -441 -310 -7 0 -114 74 -240 165
-187 136 -233 165 -261 165 -24 0 -39 -7 -49 -22z"
        />
        <path
          d="M520 780 c-19 -19 -20 -33 -20 -253 0 -263 3 -277 65 -277 60 0 65
14 65 176 0 79 3 144 6 144 3 0 34 -20 68 -45 81 -57 103 -57 189 0 l67 45 0
-138 c0 -158 8 -182 64 -182 64 0 66 9 66 277 0 220 -2 241 -18 256 -35 32
-88 19 -106 -24 -7 -17 -43 -51 -90 -83 l-79 -55 -76 54 c-42 29 -81 63 -88
76 -26 51 -78 64 -113 29z"
        />
      </g>
    </svg>
  );
};
