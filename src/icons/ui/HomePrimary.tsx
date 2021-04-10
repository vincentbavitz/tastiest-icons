import * as React from 'react';

function SvgHomePrimary(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <path
        d="M74.31 153.49v86.47m151.37-86.47v86.47M35.61 154.22L149.27 50.34l113.66 103.88m-137.65 85.07v-68.5h47.91v68.5m-124.31 6.98h201.5M189.66 84.22V61.6h38.57v56.53"
        fill="none"
        stroke="#fe4c00"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={19}
      />
    </svg>
  );
}

export default SvgHomePrimary;
