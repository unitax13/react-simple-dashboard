import * as React from "react";
import { SVGProps } from "react";

const SvgIconReturns = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.547 6.704a.524.524 0 0 1 .126.59l-6.67 15.918a.827.827 0 0 1-.283.352.896.896 0 0 1-.893.08.847.847 0 0 1-.347-.297l-3.642-5.465-5.725-3.477a.835.835 0 0 1-.31-.332.788.788 0 0 1 .083-.853.856.856 0 0 1 .37-.27l16.672-6.365a.598.598 0 0 1 .619.12ZM8.982 17.562l3.164 4.747 5.425-12.946-8.589 8.2Zm7.779-8.973L3.2 13.768l4.973 3.02 8.589-8.199h-.001Z"
      fill="currentColor"
    />
    <path
      d="M15.429 26.182h12.044c3.606 0 6.667-2.83 6.808-6.294.148-3.66-2.998-6.797-6.808-6.797H18.57"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m18.857 29.455-3.428-3.021 3.428-3.525"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconReturns;

