import * as React from 'react';

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 48.68 48.68"
      {...props}
    >
      <rect width={48.68} height={48.68} rx={11.88} fill="#ff7412" />
      <path
        d="M26.15 41.48v-15h5l.75-5.85h-5.75v-3.76c0-1.69.47-2.85 2.9-2.85h3.1V8.79a42 42 0 00-4.52-.23c-4.47 0-7.53 2.72-7.53 7.73v4.32h-5.05v5.85h5.05v15h6"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgFacebook;
