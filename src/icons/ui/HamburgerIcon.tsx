import * as React from 'react';

function SvgHamburgerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="hamburger-icon_svg__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <defs>
        <style>
          {
            '.hamburger-icon_svg__cls-1{fill:none;stroke:#ffd617;stroke-linecap:round;stroke-linejoin:round;stroke-width:19px}'
          }
        </style>
      </defs>
      <path
        className="hamburger-icon_svg__cls-1"
        d="M43.93 106.27h184.14M43.93 152.82h184.14M43.93 203.5h184.14"
      />
    </svg>
  );
}

export default SvgHamburgerIcon;
