import * as React from 'react';

function SvgMessageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="message-icon_svg__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      {...props}
    >
      <defs>
        <style>{'.message-icon_svg__cls-2{fill:#fff}'}</style>
      </defs>
      <path
        d="M213.22 87.11h-131a18.73 18.73 0 00-18.73 18.72v79.94a18.74 18.74 0 0018.76 18.73h21.52l-17.64 27.57a3.83 3.83 0 005.18 5.35l55.06-32.92h66.85A18.74 18.74 0 00232 185.77v-79.94a18.73 18.73 0 00-18.78-18.72z"
        fill="#101d23"
      />
      <path
        className="message-icon_svg__cls-2"
        d="M96.79 128.72h107.39a3.69 3.69 0 000-7.37H96.79a3.69 3.69 0 000 7.37M96.79 149.56h107.39a3.69 3.69 0 000-7.37H96.79a3.69 3.69 0 000 7.37M96.79 172h79.71a3.69 3.69 0 100-7.37H96.79a3.69 3.69 0 000 7.37"
      />
    </svg>
  );
}

export default SvgMessageIcon;
