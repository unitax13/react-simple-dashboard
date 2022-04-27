﻿import * as React from "react";
import { SVGProps } from "react";

const SvgLightMode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.25 1.5h1.5v3.75h-1.5V1.5ZM16.265 6.675l2.63-2.63 1.06 1.061-2.63 2.63-1.06-1.061ZM18.75 11.25h3.75v1.5h-3.75v-1.5ZM16.265 17.325l1.06-1.06 2.63 2.629-1.06 1.061-2.63-2.63ZM11.25 18.75h1.5v3.75h-1.5v-3.75ZM4.045 18.894l2.63-2.63 1.06 1.062-2.629 2.63-1.06-1.062ZM1.5 11.25h3.75v1.5H1.5v-1.5ZM4.045 5.106l1.061-1.061 2.63 2.63-1.061 1.06-2.63-2.629ZM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"
      fill="#000"
    />
  </svg>
);

export default SvgLightMode;
