import * as React from 'react';

function SvgCalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path d="M950 201a37.79 37.79 0 00-26.52-11H807v-88.5a37.5 37.5 0 00-75 0V190H294v-88.5a37.5 37.5 0 00-75 0V190H105a37.49 37.49 0 00-37.5 37.5V918a37.49 37.49 0 0037.5 37.5h818.5A37.49 37.49 0 00961 918V227.5a37.77 37.77 0 00-11-26.5zm-807.5 64H219v53.5a37.5 37.5 0 0075 0V265h438v53.5a37.5 37.5 0 0075 0V265h79v615.5H142.5z" />
      <rect x={218} y={445} width={116} height={116} rx={29.49} />
      <rect x={454.92} y={445} width={116} height={116} rx={29.49} />
      <rect x={692.75} y={445} width={116} height={116} rx={29.49} />
      <rect x={218} y={652} width={116} height={116} rx={29.49} />
      <rect x={454.92} y={652} width={116} height={116} rx={29.49} />
      <rect x={692.75} y={652} width={116} height={116} rx={29.49} />
    </svg>
  );
}

export default SvgCalendarIcon;
