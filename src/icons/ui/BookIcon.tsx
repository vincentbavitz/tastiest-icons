import * as React from 'react';

function SvgBookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <path
        d="M194.34 109.39a64.79 64.79 0 00-54.25-.51 64.76 64.76 0 00-54.24.51 3 3 0 00-1.73 2.73v87.67a3 3 0 004.3 2.72 59.19 59.19 0 0150.39 0l.55.11.73.14.72-.13.56-.12a59.21 59.21 0 0150.4 0 3 3 0 004.3-2.72v-87.67a3 3 0 00-1.73-2.73zM90.15 195.33v-81.18a58.18 58.18 0 0146.92 0v81.17a63.73 63.73 0 00-46.92 0zm52.95 0v-81.18a58.22 58.22 0 0146.94 0v81.17a63.85 63.85 0 00-46.94 0z"
        fill="gray"
      />
    </svg>
  );
}

export default SvgBookIcon;
