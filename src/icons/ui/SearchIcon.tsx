import * as React from 'react';

function SvgSearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="#fe4c00"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <path
        className="search-icon_svg__cls-1"
        d="M129.59 76a58.75 58.75 0 11-58.74 58.75A58.82 58.82 0 01129.59 76m0-19a77.75 77.75 0 1077.75 77.75A77.75 77.75 0 00129.59 57z"
      />
      <path
        className="search-icon_svg__cls-1"
        d="M99.47 126.86a33.87 33.87 0 0132.21-23.39 8.5 8.5 0 000-17 50.91 50.91 0 00-48.38 35.14 8.5 8.5 0 1016.17 5.25zM169.84 191.34l58.56 55.18a9.5 9.5 0 0013-13.83l-58.56-55.18a9.5 9.5 0 10-13 13.83"
      />
    </svg>
  );
}

export default SvgSearchIcon;