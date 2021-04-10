import * as React from 'react';

function SvgShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <defs>
        <style>
          {
            '.cls-1{fill:none;stroke:#fe4c00;stroke-linecap:round;stroke-linejoin:round;stroke-width:19px}'
          }
        </style>
      </defs>
      <path
        className="cls-1"
        d="M76.4 252v-54.22a66.52 66.52 0 0166.52-66.51h79.59"
      />
      <path className="cls-1" d="M177.78 73.33l57.93 57.94-57.93 57.93" />
    </svg>
  );
}

export default SvgShareIcon;
