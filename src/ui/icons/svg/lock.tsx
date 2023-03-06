import React from "react";
import Svg, { Path } from "react-native-svg";

const Lock: React.FC = (props) => {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        clipRule="evenodd"
        d="M17 21H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2Z"
        stroke="#323232"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 10V7a4 4 0 0 1 8 0v3"
        stroke="#323232"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Lock;
