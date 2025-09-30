import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  padding = 'xl'
}) => {
  const paddings = {
    sm: 'p-4 md:p-6',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
    xl: 'p-8 md:p-16 lg:p-20'
  };

  return (
    <div className={`bg-white rounded-3xl shadow-2xl border border-gray-100 ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
};