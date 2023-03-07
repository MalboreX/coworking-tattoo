import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Telegram = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M14.644 19.908 20.1 5.188a1 1 0 0 0-1.285-1.285L4.09 9.363c-.921.342-.849 1.668.104 1.907l6.834 1.717 1.707 6.816c.24.954 1.567 1.027 1.909.105Z"
      stroke={props.stroke ?? "#262628"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m19.87 4.13-8.84 8.86"
      stroke={props.stroke ?? "#262628"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Telegram;
