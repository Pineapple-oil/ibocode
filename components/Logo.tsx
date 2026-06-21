import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'light' }) => {
  const fill = variant === 'dark' ? 'none' : '#ffffff';

  return (
    <svg
      className={className}
      viewBox="0 0 240 140"
      role="img"
      aria-label="Ibocode logo"
    >
      <path
        d="M20 45 Q120 10 220 45 L230 70 Q220 105 120 130 Q20 105 10 70 Z"
        fill={fill}
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <text
        x="120"
        y="78"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Bricolage Grotesque, sans-serif"
        fontWeight="800"
        fontSize="40"
        letterSpacing="0.04em"
        fill="currentColor"
      >
        IBOCODE
      </text>
    </svg>
  );
};
