import React from "react";
import Svg, { Path } from "react-native-svg";

const Search: React.FC = (props) => {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M14.523 4.977a6.75 6.75 0 1 1-9.546 9.546 6.75 6.75 0 0 1 9.546-9.546ZM15 15l6 6"
        stroke="#262628"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Search;
