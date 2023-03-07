import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Micro = (props: SvgProps) => (
  <Svg width={14} height={18} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M7 11.75A2.75 2.75 0 0 1 4.25 9V3.5a2.75 2.75 0 1 1 5.5 0V9A2.75 2.75 0 0 1 7 11.75Z"
      stroke="#262628"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 7.167V9a5.5 5.5 0 1 1-11 0V7.167M7 14.5v2.75M3.168 17.25h7.663"
      stroke="#262628"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Micro;
