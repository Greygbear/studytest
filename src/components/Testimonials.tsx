import { Section } from './Section';
import { TestimonialCard } from './TestimonialCard';
import { ExpertCard } from './ExpertCard';
import { StatisticCard } from './StatisticCard';

const testimonials = [
  {
    content: '通过AI Love Match,我找到了真正懂我的另一半。科学的测评系统让我对自己有了更深的认识。',
    author: '张小姐',
    avatar: 'https://i.pravatar.cc/150?img=1',
    title: '成功配对用户'
  },
  {
    content: '专业的分析报告让我明白了为什么之前的感情会遇到问题,现在我学会了更好地经营感情。',
    author: '李先生',
    avatar: 'https://i.pravatar.cc/150?img=2',
    title: '平台用户'
  }
];

const experts = [
  {
    name: '王教授',
    title: '首席心理顾问',
    credentials: '心理学博士,20年婚恋咨询经验',
    photo: 'https://i.pravatar.cc/300?img=3'
  },
  {
    name: '陈博士',
    title: 'AI算法专家',
    credentials: '人工智能博士,情感计算研究员',
    photo: 'https://i.pravatar.cc/300?img=4'
  }
];

const statistics = [
  {
    value: '98%',
    label: '用户满意度'
  },
  {
    value: '50万+',
    label: '成功配对'
  },
  {
    value: '200+',
    label: '专业顾问'
  }
];

export function Testimonials() {
  return (
    <Section>
      {/* 用户评价 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          用户真实反馈
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          听听他们的故事
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.author}
            {...testimonial}
          />
        ))}
      </div>

      {/* 数据统计 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {statistics.map((statistic) => (
          <StatisticCard
            key={statistic.label}
            {...statistic}
          />
        ))}
      </div>

      {/* 专家团队 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          专业团队
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          权威专家为您保驾护航
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {experts.map((expert) => (
          <ExpertCard
            key={expert.name}
            {...expert}
          />
        ))}
      </div>
    </Section>
  );
} 