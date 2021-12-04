import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

const SvgWishlistIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={375} height={375} {...props}>
    <Defs>
      <ClipPath id="Wishlist_Icon_svg__a">
        <Path d="M136.594 112.5h102v150h-102Zm0 0" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#Wishlist_Icon_svg__a)">
      <Path
        fill="#333652"
        d="M235.594 112.527h-96c-1.656 0-3 1.34-3 2.993v143.734a2.998 2.998 0 0 0 5.121 2.117l45.879-45.793 45.879 45.793c.574.574 1.34.879 2.12.879a2.996 2.996 0 0 0 3-2.996V115.52a2.994 2.994 0 0 0-3-2.993Zm0 0"
      />
    </G>
  </Svg>
);

export default SvgWishlistIcon;

