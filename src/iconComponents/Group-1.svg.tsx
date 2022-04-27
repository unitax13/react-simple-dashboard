﻿import * as React from "react";
import { SVGProps } from "react";

const SvgGroup1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 30 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.056 2 2 6.333l5.056 5.056"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 6.333h16.607c4.971 0 9.193 4.06 9.386 9.028.206 5.251-4.133 9.75-9.386 9.75H6.332"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgGroup1;
