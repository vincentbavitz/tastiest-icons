import * as React from 'react';

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <path
        className="cls-1"
        d="M85.66 160.17l45.93 49.18a11.12 11.12 0 0016.74-.54l83.78-102.23a11.12 11.12 0 10-17.2-14.11l-75.74 92.4L101.93 145a11.13 11.13 0 10-16.27 15.19z"
      />
    </svg>
  );
}

export default SvgCheck;
