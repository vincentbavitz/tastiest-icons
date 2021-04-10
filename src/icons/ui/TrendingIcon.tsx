import * as React from 'react';

function SvgTrendingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="trending-icon_svg__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <defs>
        <style>
          {
            '.trending-icon_svg__cls-1{fill:none;stroke:#fe4c00;stroke-linecap:round;stroke-linejoin:round;stroke-width:19px}'
          }
        </style>
      </defs>
      <path className="trending-icon_svg__cls-1" d="M167.07 96.96H249v81.93" />
      <path
        className="trending-icon_svg__cls-1"
        d="M77.9 224.32l52.19-54.44h41.48l65.33-63.63"
      />
    </svg>
  );
}

export default SvgTrendingIcon;
