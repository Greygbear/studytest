import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export function FeatureCard({ title, description, icon, className = '' }: FeatureCardProps) {
  return (
    <div className={`p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="w-12 h-12 mb-4 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
        <svg 
          className="w-6 h-6 text-pink-600 dark:text-pink-400"
          fill="none"
          viewBox="0 0 24 24" 
          stroke="currentColor"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
} 