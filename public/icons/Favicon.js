import * as React from "react";
const SvgFavicon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill={color} />
    <text
      x={16}
      y={22}
      fill="#FFF"
      fontFamily="serif"
      fontSize={18}
      fontWeight={600}
      textAnchor="middle"
    >
      {"\n    R\n  "}
    </text>
  </svg>
);
export default SvgFavicon;
