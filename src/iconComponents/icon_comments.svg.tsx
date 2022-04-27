import * as React from "react";
import { SVGProps } from "react";

const SvgIconComments = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 7h10v2H7V7Zm0 4h7v2H7v-2Z" fill="currentColor" />
    <path
      d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2Zm0 14H6.667L4 18V4h16v12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIconComments;

