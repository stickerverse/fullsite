
import React from 'react';

interface IconProps {
  paths: { d: string; fillRule?: 'evenodd' | 'nonzero'; clipRule?: 'evenodd' | 'nonzero' }[];
  viewBox: string;
  className?: string;
  fill?: string;
}

const Icon: React.FC<IconProps> = ({ paths, viewBox, className = 'w-6 h-6', fill = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} fill={fill} className={`${className} overflow-hidden align-middle`}>
    {paths.map((path, index) => (
      <path key={index} d={path.d} fillRule={path.fillRule} clipRule={path.clipRule} />
    ))}
  </svg>
);

export default Icon;
