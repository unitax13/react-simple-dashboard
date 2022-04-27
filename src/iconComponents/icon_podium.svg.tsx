import * as React from "react";
import { SVGProps } from "react";

const SvgIconPodium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#icon_podium_svg__a)">
      <path
        d="m18 10.635 3.675 2.235-.975-4.215 3.3-2.82-4.335-.375L18 1.5l-1.695 3.96L12 5.835l3.27 2.82-1.02 4.215L18 10.635Zm-12 9 3.675 2.235-.975-4.215 3.3-2.82-4.335-.375L6 10.5l-1.695 3.96L0 14.835l3.27 2.82-1.02 4.215L6 19.635Zm24-4.5 3.675 2.235-.975-4.215 3.3-2.82-4.335-.375L30 6l-1.695 3.96-4.305.375 3.27 2.82-1.02 4.215L30 15.135ZM22.5 34.5h-9V15h9v19.5Zm-12 0h-9v-9h9v9Zm24 0h-9v-15h9v15Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="icon_podium_svg__a">
        <path fill="#fff" d="M0 0h36v36H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgIconPodium;
