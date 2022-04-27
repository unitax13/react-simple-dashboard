﻿import * as React from "react";
import { SVGProps } from "react";

const SvgIconLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 31.5h-6a3 3 0 0 1-3-3v-21a3 3 0 0 1 3-3h6M24 25.5l7.5-7.5-7.5-7.5M31.5 18h-18"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconLogout;
