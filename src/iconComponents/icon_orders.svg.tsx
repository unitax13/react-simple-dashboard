import * as React from "react";
import { SVGProps } from "react";

const SvgIconOrders = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.75 6H8.25a1.5 1.5 0 0 0-1.5 1.5v24a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5v-24a1.5 1.5 0 0 0-1.5-1.5Z"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinejoin="round"
    />
    <path
      d="M13.5 3v4.5M22.5 3v4.5M12 14.25h12M12 20.25h9M12 26.25h6"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconOrders;

