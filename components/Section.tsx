import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, light = false }) => {
  return (
    <section id={id} className={`py-16 lg:py-24 ${light ? 'bg-white' : 'bg-paper'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
