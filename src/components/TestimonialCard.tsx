import Image from 'next/image';

interface TestimonialCardProps {
  content: string;
  author: string;
  avatar: string;
  title: string;
  className?: string;
}

export function TestimonialCard({ 
  content, 
  author, 
  avatar, 
  title,
  className = '' 
}: TestimonialCardProps) {
  return (
    <div className={`p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg ${className}`}>
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-pink-100 flex items-center justify-center">
            <span className="text-xl font-semibold text-pink-600">
              {author[0]}
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic">"{content}"</p>
    </div>
  );
} 