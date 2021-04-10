import * as React from 'react';

function SvgTrending(props: React.SVGProps<SVGSVGElement>) {
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
      <path className="cls-1" d="M167.07 96.96H249v81.93" />
      <path className="cls-1" d="M77.9 224.32l52.19-54.44h41.48l65.33-63.63" />
    </svg>
  );
}

export default SvgTrending;
