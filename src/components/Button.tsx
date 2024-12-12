import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  href, 
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-pink-600 hover:bg-pink-700 text-white',
    secondary: 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200'
  };
  
  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
} 