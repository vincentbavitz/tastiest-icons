import * as React from 'react';

function SvgSupportIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="support-icon_svg__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <defs>
        <style>
          {
            '.support-icon_svg__cls-2{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:13px}'
          }
        </style>
      </defs>
      <path
        d="M62.3 120.2a91 91 0 01182 0"
        strokeWidth={19}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="support-icon_svg__cls-2"
        d="M172.79 260.48a91.16 91.16 0 0071.33-62.33M61.18 123.97h27.93v90.01H61.18z"
      />
      <path
        className="support-icon_svg__cls-2"
        d="M261.82 124H290v90h-28.18a45 45 0 01-45-45 45 45 0 0145-45z"
        transform="rotate(180 253.385 168.975)"
      />
      <path
        className="support-icon_svg__cls-2"
        d="M61 124h28.11v90H61a45 45 0 01-45-45 45 45 0 0145-45z"
      />
      <path
        className="support-icon_svg__cls-2"
        transform="rotate(-180 230.77 168.975)"
        d="M216.81 123.97h27.93v90.01h-27.93z"
      />
      <rect
        className="support-icon_svg__cls-2"
        x={124.44}
        y={250.41}
        width={47.68}
        height={18.88}
        rx={8.65}
      />
    </svg>
  );
}

export default SvgSupportIcon;
