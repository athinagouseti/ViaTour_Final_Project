import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

const SvgProfileIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={375} height={375} {...props}>
    <Defs>
      <ClipPath id="Profile_Icon_svg__a">
        <Path d="M129.07 129.07h117v117h-117Zm0 0" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#Profile_Icon_svg__a)">
      <Path
        fill="#333652"
        d="M187.57 187.57c16.164 0 29.25-13.125 29.25-29.25 0-16.16-13.086-29.25-29.25-29.25-16.16 0-29.25 13.09-29.25 29.25 0 16.125 13.09 29.25 29.25 29.25Zm0 14.625c-19.484 0-58.5 9.766-58.5 29.25v14.625h117v-14.625c0-19.484-39.011-29.25-58.5-29.25Zm0 0"
      />
    </G>
  </Svg>
);

export default SvgProfileIcon;

