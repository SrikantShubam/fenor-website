import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  to?: string; // For internal links using Next.js Link
  href?: string; // For external links
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string; // Allow custom Tailwind classes
}

const Button: React.FC<ButtonProps> = ({ children, to, href, onClick, type = 'button', className = '' }) => {
  const baseStyles = `
    bg-[#EBBA7F]
    text-black
    rounded-md
    hover:bg-special
    text-[13px]
    md:text-[23px]
    px-[15px]
    py-[15px]
    inline-block
    transition-colors
    duration-200
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-[#EBBA7F]
    ${className}
  `.trim();

  if (to) {
    return (
      <Link href={to} passHref className={baseStyles}>
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={baseStyles} onClick={onClick}>
        {children}
      </a>
    );
  } else {
    return (
      <button type={type} onClick={onClick} className={baseStyles}>
        {children}
      </button>
    );
  }
};

export default Button;