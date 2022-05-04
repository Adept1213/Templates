import { FC } from "react";
import { SvgIconProps } from "../type/type";

const OkSVG: FC<SvgIconProps> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000000"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    color="#000000"
  >
    {" "}
    <title id="okIconTitle">Ok</title> <polyline points="4 13 9 18 20 7" />{" "}
  </svg>
);

export default OkSVG;
