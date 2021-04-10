import * as React from 'react';

function SvgHamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <path
        d="M43.93 106.27h184.14M43.93 152.82h184.14M43.93 203.5h184.14"
        fill="none"
        stroke="#ffd617"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={19}
      />
    </svg>
  );
}

export default SvgHamburger;
