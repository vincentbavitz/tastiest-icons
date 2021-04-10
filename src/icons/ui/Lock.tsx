import * as React from 'react';

function SvgLock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40.76 63.82"
      fill="#ff4900"
      {...props}
    >
      <path
        className="cls-1"
        d="M38.66 61.72v-2.1H4.2v-29.1h32.36v31.2h2.1v-2.1 2.1h2.1V26.31H0v37.51h40.76v-2.1h-2.1z"
      />
      <path
        className="cls-1"
        d="M8.86 28.18V15.82a11.64 11.64 0 0123.28 0v12.36h4.2V15.82a15.84 15.84 0 10-31.68 0v12.36z"
      />
      <circle className="cls-1" cx={20.5} cy={41.65} r={4.74} />
      <path
        className="cls-1"
        d="M24.32 55.35h-7.73c-.7 0-1.12-.88-.89-1.78l2.91-11.11h3.7l2.91 11.11c.27.9-.19 1.78-.9 1.78z"
      />
    </svg>
  );
}

export default SvgLock;
