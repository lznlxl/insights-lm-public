
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg'
  };

  return (
    <div className={`${sizeClasses[size]} bg-blue-600 rounded-full flex items-center justify-center ${className}`}>
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <span className={`${textSizes[size]} font-bold text-white`}>
          {size === 'sm' ? 'BD' : size === 'lg' ? 'BlueDotLM' : 'BDL'}
        </span>
      </div>
    </div>
  );
};

export default Logo;
