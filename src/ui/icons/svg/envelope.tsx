import React from "react";
import Svg, { Path } from "react-native-svg";

const Envelope: React.FC = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="m15.374 12.718 4.506-3.055A2.551 2.551 0 0 0 18.449 5H5.566a2.55 2.55 0 0 0-1.431 4.663l4.506 3.055a6 6 0 0 0 6.733 0Z"
        stroke="#323232"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 7.551V17a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7.552"
        stroke="#323232"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Envelope;
