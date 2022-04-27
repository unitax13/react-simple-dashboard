import * as React from "react";
import { SVGProps } from "react";

const SvgMoreCommentsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 3v5h13v9h4l1-1V4l-1-1H8Z" fill="#318CF6" />
    <path
      d="M25 2H9c-1.103 0-2 .897-2 2v18l5.333-4H25c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2Zm0 14H11.667L9 18V4h16v12Z"
      fill="#F1F1F1"
    />
    <path d="M3 25V8h18v14H7l-4 3Z" fill="#318CF6" />
    <path d="M7 12h10v2H7v-2Zm0 4h7v2H7v-2Z" fill="#F1F1F1" />
    <path
      d="M20 7H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2Zm0 14H6.667L4 23V9h16v12Z"
      fill="#F1F1F1"
    />
  </svg>
);

export default SvgMoreCommentsIcon;

