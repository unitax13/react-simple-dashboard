﻿﻿import * as React from "react";
import { SVGProps } from "react";

const SvgGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M35.008.327a1.125 1.125 0 0 1 .248 1.215l-13.093 32.73a1.688 1.688 0 0 1-2.99.28l-7.15-11.24-11.24-7.15a1.687 1.687 0 0 1 .28-2.992L33.793.08a1.125 1.125 0 0 1 1.215.248V.327Zm-20.74 22.329 6.212 9.76L31.13 5.794 14.267 22.656Zm15.27-18.453L2.918 14.853l9.762 6.21 16.862-16.86h-.002Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgGroup;
