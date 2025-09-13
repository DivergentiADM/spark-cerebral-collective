import React from 'react';

const AtomIcon = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="animate-atom-spin"
      >
        {/* Nucleus */}
        <circle 
          cx="12" 
          cy="12" 
          r="2" 
          fill="currentColor" 
          className="animate-energy-pulse"
        />
        
        {/* Electron orbits */}
        <ellipse 
          cx="12" 
          cy="12" 
          rx="8" 
          ry="3" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.6"
        />
        <ellipse 
          cx="12" 
          cy="12" 
          rx="8" 
          ry="3" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.6"
          transform="rotate(60 12 12)"
        />
        <ellipse 
          cx="12" 
          cy="12" 
          rx="8" 
          ry="3" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.6"
          transform="rotate(120 12 12)"
        />
        
        {/* Electrons */}
        <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity="0.8">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="4" cy="12" r="1.5" fill="currentColor" opacity="0.8">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 12 12"
            to="-360 12 12"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default AtomIcon;