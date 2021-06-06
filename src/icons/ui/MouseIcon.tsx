import * as React from 'react';

function SvgMouseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path d="M958 721.58a37.74 37.74 0 00-12.26-26L692.53 465.77 803 385.17a37.5 37.5 0 00-9-65.46L116.81 69a37.5 37.5 0 00-46.72 51.62l316.52 648a37.49 37.49 0 0066.06 2.48l68.78-117.54L775 883.72a37.5 37.5 0 0053-2.56L948.32 748.6a37.81 37.81 0 009.68-27.02zM797.66 803l-260-236a37.5 37.5 0 00-57.57 8.83l-56.78 97-244.7-501 523.78 194-91.25 66.47a37.52 37.52 0 00-3.1 58.07L867.58 726z" />
    </svg>
  );
}

export default SvgMouseIcon;
