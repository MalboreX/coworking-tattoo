import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Images = (props: SvgProps) => (
  <Svg width={19} height={18} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M15.25 17.25h-11A2.75 2.75 0 0 1 1.5 14.5v-11A2.75 2.75 0 0 1 4.25.75h11A2.75 2.75 0 0 1 18 3.5v11a2.75 2.75 0 0 1-2.75 2.75Z"
      stroke="#262628"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.5 14.029 5.728 9.8a.916.916 0 0 1 1.296 0l1.289 1.289 4.195-4.195a.916.916 0 0 1 1.296 0L18 11.091M6.556 4.79a.344.344 0 1 1-.487.486.344.344 0 0 1 .487-.486Z"
      stroke="#262628"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Images;
