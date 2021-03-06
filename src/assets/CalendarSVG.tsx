import React from "react";
import { FC } from "react";
import { SvgIconProps } from "../type/type";

const CalendarSVG: FC<SvgIconProps> = ({ width, height }) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    x="0px"
    y="0px"
    viewBox="0 0 330 330"
  >
    <g id="XMLID_71_">
      <path
        id="XMLID_85_"
        d="M30,120H0v195c0,8.284,6.716,15,15,15h165v-30v-21.213V195c0-8.283,6.716-15,15-15h83.787H300h30v-60h-30
		H30z"
      />
      <polygon
        id="XMLID_86_"
        points="278.787,210 210,210 210,278.787 210,321.213 321.213,210 	"
      />
      <path
        id="XMLID_87_"
        d="M315,30h-85V15c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v15h-70V15c0-8.284-6.716-15-15-15
		c-8.284,0-15,6.716-15,15v15H15C6.716,30,0,36.716,0,45v45h30h270h30V45C330,36.716,323.284,30,315,30z"
      />
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);

export default React.memo(CalendarSVG, () => true);
