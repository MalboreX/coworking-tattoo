import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const Plus = (props: SvgProps) => (
  <Svg width={10} height={10} fill="none" {...props}>
    <G clipPath="url(#a)" fill="#fff">
      <Path d="M5.667 0H4.333v10h1.334V0Z" />
      <Path d="M0 4.333v1.334h10V4.333H0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h10v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Plus;
