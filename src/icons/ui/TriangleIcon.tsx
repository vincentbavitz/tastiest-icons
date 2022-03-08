import * as React from 'react';

function SvgTriangleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15 9L0 17.66V.34L15 9z" />
    </svg>
  );
}

export default SvgTriangleIcon;
