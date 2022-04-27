import * as React from "react";
import { SVGProps } from "react";

const SvgLineWykres = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M31.667 26.932H3V.34C3 .153 2.85 0 2.667 0H.333A.338.338 0 0 0 0 .34v29.32c0 .187.15.34.333.34h31.334a.338.338 0 0 0 .333-.34v-2.387c0-.188-.15-.341-.333-.341ZM7.408 20.357a.33.33 0 0 0 .471 0l5.763-5.864 5.316 5.472a.33.33 0 0 0 .471 0L30.904 8.233a.348.348 0 0 0 0-.482l-1.65-1.687a.331.331 0 0 0-.47 0L19.2 15.86l-5.308-5.463a.331.331 0 0 0-.471 0l-7.658 7.785a.346.346 0 0 0 0 .482l1.645 1.692Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLineWykres;

