import * as React from "react";
import { SVGProps } from "react";

const SvgBiArrowRightCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1-.001 8 8 8 0 0 1 16 8ZM4.5 7.5a.5.5 0 1 0 0 1h5.793l-2.147 2.146a.501.501 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L10.293 7.5H4.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBiArrowRightCircle;

