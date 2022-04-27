import * as React from "react";
import { SVGProps } from "react";

const SvgIconView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 13.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
      fill={props.currentColor}
    />
    <path
      d="M21.271 10.766A11.474 11.474 0 0 0 11 3.437a11.474 11.474 0 0 0-10.271 7.33.688.688 0 0 0 0 .467A11.474 11.474 0 0 0 11 18.563a11.474 11.474 0 0 0 10.271-7.33.688.688 0 0 0 0-.467ZM11 15.47A4.468 4.468 0 1 1 15.469 11 4.476 4.476 0 0 1 11 15.469Z"
      fill={props.currentColor}
    />
  </svg>
);

export default SvgIconView;
