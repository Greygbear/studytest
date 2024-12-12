import { Section } from './Section';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: 'AI智能分析',
    description: '运用先进的人工智能算法,为您提供个性化的情感分析和建议',
    icon: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />'
  },
  {
    title: '科学测评系统',
    description: '基于心理学理论的专业测评体系,全方位了解您的情感需求',
    icon: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />'
  },
  {
    title: '隐私保护承诺',
    description: '严格的数据加密和隐私保护措施,确保您的个人信息安全',
    icon: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />'
  }
];

export function Features() {
  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          为什么选择 AI Love Match
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          科技赋能情感,让爱更有方向
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </Section>
  );
} 