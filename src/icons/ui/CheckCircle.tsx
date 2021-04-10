import * as React from 'react';

function SvgCheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 101.44 101.42"
      {...props}
    >
      <path
        d="M99.13 50.71a48.4 48.4 0 11-48.4-48.4 48.4 48.4 0 0148.4 48.4z"
        fill="#fff"
      />
      <path
        d="M99.13 50.71H96.8a46.09 46.09 0 11-13.5-32.59 45.9 45.9 0 0113.5 32.59h4.62a50.71 50.71 0 10-50.71 50.71 50.71 50.71 0 0050.73-50.71z"
        fill="#ff4900"
      />
      <path
        d="M22.02 60.84l17.66 14.75a4.25 4.25 0 006.1-.71l33.27-44.35a4.232 4.232 0 00-6.77-5.08l-30.6 40.78-14.24-11.89a4.232 4.232 0 10-5.42 6.5z"
        fill="#fc4d00"
      />
    </svg>
  );
}

export default SvgCheckCircle;
