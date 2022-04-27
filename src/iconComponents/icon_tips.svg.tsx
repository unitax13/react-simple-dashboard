import * as React from "react";
import { SVGProps } from "react";

const SvgIconTips = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M44 8H4v30h15l5 5 5-5h15V8Z"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 23v9M24 16v1"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgIconTips;

