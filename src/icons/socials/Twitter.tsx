import * as React from 'react';

function SvgTwitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 48.68 48.68"
      {...props}
    >
      <rect width={48.68} height={48.68} rx={11.88} fill="#ff7412" />
      <path
        d="M44.11 12.37a15 15 0 01-4.3 1.17 7.47 7.47 0 003.29-4.17 14.9 14.9 0 01-4.75 1.81A7.47 7.47 0 0025.62 18a21.22 21.22 0 01-15.41-7.81 7.49 7.49 0 002.31 10 7.47 7.47 0 01-3.38-.94v.12a7.48 7.48 0 006 7.33 7.44 7.44 0 01-2 .26 7.15 7.15 0 01-1.4-.14 7.48 7.48 0 007 5.19 15.2 15.2 0 01-11.07 3.1 21.18 21.18 0 0011.46 3.36c13.75 0 21.27-11.39 21.27-21.27v-1a15.59 15.59 0 003.71-3.83"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgTwitter;
