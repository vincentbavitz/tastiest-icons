import * as React from 'react';

function SvgLocation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <defs>
        <style>{'.cls-1{fill:#fe4c00}'}</style>
      </defs>
      <path
        className="cls-1"
        d="M166.51 78a64.27 64.27 0 0164.2 64.2c0 18.79-10 41.64-28.21 64.33-14.72 18.37-29.46 29.82-36 33.58-6.59-3.7-21.31-15-35.94-33.13-18.19-22.56-28.21-45.57-28.21-64.78A64.27 64.27 0 01166.51 78m0-19a83.2 83.2 0 00-83.2 83.2c0 58.14 67.58 117.83 83.2 117.83s83.2-60.82 83.2-117.83a83.2 83.2 0 00-83.2-83.2z"
      />
      <path
        className="cls-1"
        d="M166 101.74a18.73 18.73 0 1018.72 18.73A18.73 18.73 0 00166 101.74z"
      />
    </svg>
  );
}

export default SvgLocation;
