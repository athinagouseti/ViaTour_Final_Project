import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

const SvgTripsIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={375} height={375} {...props}>
    <Defs>
      <ClipPath id="Trips_Icon_svg__a">
        <Path d="M117.355 120.613H255v133.5H117.355Zm0 0" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#Trips_Icon_svg__a)">
      <Path
        fill="#333652"
        d="M247.434 179.313c10.12-.008 10.12 15.257-.286 15.23h-42.644l-35.832 59.562h-15.77l19.567-59.277h-31.89l-10.68 13.73h-12.47l6.594-21.167-6.593-21.094h12.468l10.68 13.586h31.89l-19.566-59.278h15.77l35.832 58.707h42.93"
      />
    </G>
  </Svg>
);

export default SvgTripsIcon;

