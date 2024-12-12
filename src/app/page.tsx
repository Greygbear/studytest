import { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { CTASection } from '@/components/CTASection';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'AI Love Match - 智能情感分析平台',
  description: '通过AI技术为您提供专业、科学、有趣的情感分析和建议',
  keywords: '情感分析,AI配对,关系咨询,人工智能,感情测试',
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-black">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI智能情感分析
              <span className="text-pink-600">助您找到真爱</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              科学的测评系统，专业的分析建议，让寻找真爱变得简单有趣
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button href="/test" variant="primary">
                开始测评
              </Button>
              <Button href="/about" variant="secondary">
                了解更多
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full aspect-[4/3] rounded-lg shadow-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800"
                alt="AI Love Match"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
