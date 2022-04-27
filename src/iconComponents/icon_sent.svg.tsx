﻿import * as React from "react";
import { SVGProps } from "react";

const SvgIconSent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#icon_sent_svg__a)">
      <path
        d="M35.672.328a1.125 1.125 0 0 1 .247 1.215L22.826 34.274a1.686 1.686 0 0 1-2.99.28l-7.15-11.24-11.24-7.15a1.688 1.688 0 0 1 .28-2.993L34.456.084a1.125 1.125 0 0 1 1.215.248V.328ZM14.93 22.658l6.212 9.76 10.65-26.622L14.93 22.657Zm15.27-18.453L3.58 14.855l9.762 6.21 16.862-16.86h-.002Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="icon_sent_svg__a">
        <path fill="#fff" d="M0 0h36v36H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgIconSent;
