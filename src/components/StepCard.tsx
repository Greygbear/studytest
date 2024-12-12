interface StepCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export function StepCard({ number, title, description, className = '' }: StepCardProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -left-4 -top-4 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
} 