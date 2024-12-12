import { Button } from './Button';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PlanCardProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
  className?: string;
}

export function PlanCard({ 
  name, 
  price, 
  description, 
  features,
  popular = false,
  className = '' 
}: PlanCardProps) {
  return (
    <div className={`relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg ${popular ? 'border-2 border-pink-600' : ''} ${className}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="px-4 py-1 bg-pink-600 text-white text-sm rounded-full">
            最受欢迎
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="text-3xl font-bold mb-2">{price}</div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li 
            key={index}
            className={`flex items-center ${feature.included ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400'}`}
          >
            <svg
              className={`w-5 h-5 mr-2 ${feature.included ? 'text-pink-600' : 'text-gray-400'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {feature.included ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              )}
            </svg>
            {feature.text}
          </li>
        ))}
      </ul>

      <Button 
        href="/signup" 
        variant={popular ? 'primary' : 'secondary'}
        className="w-full"
      >
        立即开始
      </Button>
    </div>
  );
} 