interface StatisticCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatisticCard({ value, label, className = '' }: StatisticCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">
        {value}
      </div>
      <div className="text-gray-600 dark:text-gray-300">
        {label}
      </div>
    </div>
  );
} 