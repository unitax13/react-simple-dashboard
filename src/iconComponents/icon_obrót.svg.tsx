import * as React from "react";
import { SVGProps } from "react";

const SvgIconObrt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 0C6.729 0 0 6.729 0 15s6.729 15 15 15 15-6.729 15-15S23.271 0 15 0Zm1.5 22.372V24h-3v-1.62C9.992 21.83 9 19.377 9 18h3c.017.215.239 1.5 3 1.5 2.07 0 3-.878 3-1.5 0-.486 0-1.5-3-1.5-5.22 0-6-2.82-6-4.5 0-1.932 1.543-3.876 4.5-4.372v-1.61h3v1.663c2.601.615 3.6 2.78 3.6 4.319h-1.5l-1.5.027c-.021-.57-.323-1.527-2.1-1.527-1.948 0-3 .774-3 1.5 0 .561 0 1.5 3 1.5 5.22 0 6 2.82 6 4.5 0 1.932-1.544 3.876-4.5 4.372Z"
      fill="#2E892C"
    />
  </svg>
);

export default SvgIconObrt;

