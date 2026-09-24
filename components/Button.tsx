import React from 'react';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../services/tracking';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: boolean;
  href?: string;
  trackingName?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  icon = false, 
  className = '',
  href,
  trackingName,
  onClick,
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 relative overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-600 to-accent-600 text-white shadow-lg border border-transparent",
    secondary: "bg-white text-slate-900 border border-transparent",
    outline: "bg-transparent border-2 border-slate-700 text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const content = (
    <span className="relative z-10 flex items-center">
      {children}
      {icon && <ArrowRight className="ml-2 h-5 w-5" />}
    </span>
  );

  const handleAction = (e: React.MouseEvent<any>) => {
    if (trackingName) {
      trackEvent(trackingName);
    }
    
    if (onClick) {
      onClick(e as any);
    }

    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
  };

  if (href) {
    const isAnchor = href.startsWith('#');

    return (
      <a 
        href={href} 
        onClick={handleAction}
        target={isAnchor ? undefined : "_blank"} 
        rel={isAnchor ? undefined : "noopener noreferrer"}
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      onClick={handleAction}
      {...props}
    >
      {content}
    </button>
  );
};
