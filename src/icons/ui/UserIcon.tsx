import * as React from 'react';

function SvgUserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="user-icon_svg__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <defs>
        <style>
          {
            '.user-icon_svg__cls-1{fill:none;stroke:#fe4c00;stroke-linecap:round;stroke-linejoin:round;stroke-width:19px}'
          }
        </style>
      </defs>
      <circle className="user-icon_svg__cls-1" cx={138.38} cy={99.2} r={51} />
      <path
        className="user-icon_svg__cls-1"
        d="M78.47 247.47v-38.14a58.81 58.81 0 0158.8-58.81 58.8 58.8 0 0158.8 58.81v38.14M29.36 250.16h212.09"
      />
    </svg>
  );
}

export default SvgUserIcon;
