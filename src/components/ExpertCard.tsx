import Image from 'next/image';

interface ExpertCardProps {
  name: string;
  title: string;
  credentials: string;
  photo: string;
  className?: string;
}

export function ExpertCard({
  name,
  title,
  credentials,
  className = ''
}: ExpertCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-pink-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-semibold text-pink-600">
            {name[0]}
          </span>
        </div>
      </div>
      <h4 className="font-semibold text-lg mb-1">{name}</h4>
      <p className="text-pink-600 dark:text-pink-400 font-medium mb-2">{title}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{credentials}</p>
    </div>
  );
} 