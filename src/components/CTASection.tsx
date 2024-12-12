import { Section } from './Section';
import { StepCard } from './StepCard';
import { PlanCard } from './PlanCard';

const steps = [
  {
    number: 1,
    title: '完成测评',
    description: '通过科学的测评问卷,了解自己的性格特点和情感需求'
  },
  {
    number: 2,
    title: 'AI分析',
    description: '智能算法分析您的测评结果,生成专业的分析报告'
  },
  {
    number: 3,
    title: '获取建议',
    description: '根据分析结果,为您提供个性化的情感建议和改善方案'
  }
];

const plans = [
  {
    name: '基础版',
    price: '免费',
    description: '体验核心功能',
    features: [
      { text: '基础性格测评', included: true },
      { text: '简单匹配分析', included: true },
      { text: '社区互动', included: true },
      { text: '深度分析报告', included: false },
      { text: 'AI专业咨询', included: false },
      { text: '专家一对一指导', included: false }
    ]
  },
  {
    name: 'VIP会员',
    price: '￥299/月',
    description: '解锁全部功能',
    popular: true,
    features: [
      { text: '基础性格测评', included: true },
      { text: '深度匹配分析', included: true },
      { text: '社区互动', included: true },
      { text: '深度分析报告', included: true },
      { text: 'AI专业咨询', included: true },
      { text: '专家一对一指导', included: true }
    ]
  }
];

export function CTASection() {
  return (
    <Section className="bg-gradient-to-b from-white to-pink-50 dark:from-black dark:to-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          开启您的情感之旅
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          三步轻松开始,遇见更好的自己
        </p>
      </div>

      {/* 步骤说明 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {steps.map((step) => (
          <StepCard
            key={step.number}
            {...step}
          />
        ))}
      </div>

      {/* 会员方案 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <PlanCard
            key={plan.name}
            {...plan}
          />
        ))}
      </div>
    </Section>
  );
} 