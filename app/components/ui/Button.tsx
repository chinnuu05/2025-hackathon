import React from 'react';

interface PlugButtonProps {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // Define size options
  link?: string;
  fullWidth?: boolean;
  radius?: 'lg' | 'xl' | '2xl'; // Define radius options
  onClick?: () => void; // Add the onClick prop
  loading?: boolean; // Add a loading prop
}

const sizeClasses = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-2.5 text-lg',
  xl: 'px-8 py-3 text-xl',
};

const radiusClasses = {
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
};

export const PlugButton = ({
  children,
  link = "#",
  size = 'md',
  fullWidth = false,
  radius = 'xl',
  onClick, // Destructure the onClick prop
  loading = false, // Default loading to false
}: PlugButtonProps) => (
  <div className={`${fullWidth ? 'w-full' : 'w-fit'} header-button space-x-2`}>
    <div className={`lg:${fullWidth ? 'w-full' : 'w-fit'} flex lg:items-center`}>
      <a
        href={link}
        className={`nav-button dark:hover:drop-shadow-lg flex ${fullWidth ? 'w-full' : 'w-fit'} items-center justify-center ${radiusClasses[radius]} border border-yellow-500 bg-[#FF8C46] ${sizeClasses[size]} font-bold text-white ring-yellow-500 ring-offset-2 dark:ring-offset-slate-700 dark:drop-shadow-[2px_2px_2px_rgb(0,0,0,1)] active:ring-1`}
        onClick={onClick} // Attach the onClick handler
      >
        {loading ? (
          <span className="flex items-center space-x-2">
            <span>Loading</span>
            <span className="animate-pulse">...</span>
          </span>
        ) : (
          <span>{children}</span>
        )}
      </a>
    </div>
  </div>
);
