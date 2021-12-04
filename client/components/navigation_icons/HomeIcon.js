import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

const SvgHomeIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={375} height={375} {...props}>
    <Defs>
      <ClipPath id="Home_Icon_svg__a">
        <Path d="M112.5 123.75h150v127.5h-150Zm0 0" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#Home_Icon_svg__a)">
      <Path
        fill="#333652"
        d="M172.5 251.25v-45h30v45H240v-60h22.5l-75-67.5-75 67.5H135v60Zm0 0"
      />
    </G>
  </Svg>
);

export default SvgHomeIcon;

