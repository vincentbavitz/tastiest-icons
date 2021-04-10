import * as React from 'react';

function SvgLoading90Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      {...props}
    >
      <defs>
        <style>
          {
            '.cls-1{fill:none;stroke:#333;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3.5px;opacity:.9}'
          }
        </style>
      </defs>
      <path
        className="cls-1"
        d="M83.1 70.71l-12.13-6.99m-45.42.85l-11.87 7.44M68.21 15.4l-6.99 12.13M34.78 73.47L27.79 85.6"
      />
      <path
        d="M25.03 37.28L12.9 30.29"
        opacity={0.5}
        fill="none"
        stroke="#333"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3.5}
      />
      <path
        className="cls-1"
        d="M82.32 28.99l-11.87 7.44m-.94 48.39l-7.44-11.87"
      />
      <path
        d="M33.93 28.05l-7.44-11.87"
        opacity={0.15}
        fill="none"
        stroke="#333"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3.5}
      />
      <path
        className="cls-1"
        d="M88.5 50.75l-14-.08m-53-.34l-14-.08M47.75 91l.08-14m.34-53l.08-14"
      />
    </svg>
  );
}

export default SvgLoading90Icon;
