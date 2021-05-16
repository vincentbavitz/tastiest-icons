import * as React from 'react';

function SvgAlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 75 75"
      {...props}
    >
      <path
        className="alert-icon_svg__cls-1"
        d="M72.17 37.5h-2.83A31.82 31.82 0 1160.02 15a31.78 31.78 0 019.32 22.5H75A37.5 37.5 0 1037.5 75 37.5 37.5 0 0075 37.5z"
      />
      <g transform="translate(1.563 -.833)">
        <rect x={31.758} y={16.499} />
        <ellipse cx={35.937} cy={55.903} rx={4.257} ry={4.263} />
      </g>
    </svg>
  );
}

export default SvgAlertIcon;
