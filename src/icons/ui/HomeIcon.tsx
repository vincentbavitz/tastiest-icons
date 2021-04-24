import * as React from 'react';

function SvgHomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="home-icon_svg__Layer_1"
      stroke="#fe4c00"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <defs>
        <style>
          {
            '.home-icon_svg__cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:19px}'
          }
        </style>
      </defs>
      <path
        className="home-icon_svg__cls-1"
        d="M74.31 153.49v86.47M225.68 153.49v86.47M35.61 154.22L149.27 50.34l113.66 103.88M125.28 239.29v-68.5h47.91v68.5M48.88 246.27h201.5M189.66 84.22V61.6h38.57v56.53"
      />
    </svg>
  );
}

export default SvgHomeIcon;
