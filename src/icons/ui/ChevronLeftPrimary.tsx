import * as React from 'react';

function SvgChevronLeftPrimary(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <circle cx={156.67} cy={152.82} r={92.07} fill="#fe4c00" />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={19}
        d="M169.72 204.95l-52.13-52.13 52.13-52.13"
      />
    </svg>
  );
}

export default SvgChevronLeftPrimary;
