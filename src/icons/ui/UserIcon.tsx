import * as React from 'react';

function SvgUserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path d="M911 876.25H772.49V740.47A266.89 266.89 0 00654.7 518.91q-7.89-5.32-16.18-10.1a236.83 236.83 0 10-261.83-2.63 266.84 266.84 0 00-138.64 234.29v135.78H107a37.5 37.5 0 000 75h804a37.5 37.5 0 000-75zm-555.89-517.9a162.08 162.08 0 1120.33 42.3 161.44 161.44 0 01-20.33-42.3zm-42.06 382.12a192.22 192.22 0 11384.44 0v135.78H313.05z" />
    </svg>
  );
}

export default SvgUserIcon;
