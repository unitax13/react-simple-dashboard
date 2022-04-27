import * as React from "react";
import { SVGProps } from "react";

const SvgIconExpense = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 39 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M31 2v16M38 11l-7 7-7-7"
      stroke="#AD3232"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0Zm1 14.915V16H9v-1.08c-2.339-.367-3-2.002-3-2.92h2c.011.143.159 1 2 1 1.38 0 2-.585 2-1 0-.324 0-1-2-1-3.48 0-4-1.88-4-3 0-1.288 1.029-2.584 3-2.915V4.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C11.386 7.638 11.185 7 10 7c-1.299 0-2 .516-2 1 0 .374 0 1 2 1 3.48 0 4 1.88 4 3 0 1.288-1.029 2.584-3 2.915Z"
      fill="#AD3232"
    />
  </svg>
);

export default SvgIconExpense;

