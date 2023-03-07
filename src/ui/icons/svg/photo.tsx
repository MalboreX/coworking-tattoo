import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Photo = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M14.88 10.168a3.987 3.987 0 1 1-5.64 5.638 3.987 3.987 0 0 1 5.64-5.638Z"
      stroke={props.stroke ?? "#262628"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M21 9v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2l1.462-2.504A1 1 0 0 1 9.326 4h5.304c.351 0 .676.184.857.484L17 7h2a2 2 0 0 1 2 2Z"
      stroke={props.stroke ?? "#262628"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Photo;
