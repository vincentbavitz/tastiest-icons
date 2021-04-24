import * as React from 'react';

function SvgPlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="plus-icon_svg__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <defs>
        <style>
          {
            '.plus-icon_svg__cls-1{fill:none;stroke:#fe4c00;stroke-linecap:round;stroke-linejoin:round;stroke-width:19px}'
          }
        </style>
      </defs>
      <path
        className="plus-icon_svg__cls-1"
        d="M220.11 150.13H57.65M138.88 231.36V68.9"
      />
    </svg>
  );
}

export default SvgPlusIcon;
