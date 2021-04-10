import * as React from 'react';

function SvgExit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <path
        className="cls-1"
        d="M169.71 150l49-53.18a14.5 14.5 0 00-21.34-19.64L150 128.59l-47.33-51.41a14.5 14.5 0 10-21.34 19.64l49 53.18-49 53.18a14.5 14.5 0 1021.34 19.64L150 171.41l47.33 51.41a14.5 14.5 0 1021.34-19.64z"
      />
    </svg>
  );
}

export default SvgExit;
