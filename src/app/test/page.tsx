'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

const steps = [
  { title: '基础信息', description: '了解你的基本情况' },
  { title: '个性特征', description: '探索你的性格特点' },
  { title: '伴侣期望', description: '理想伴侣的特质' },
  { title: '测试结果', description: '查看分析报告' }
];

export default function TestPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [testData, setTestData] = useState({
    basicInfo: {},
    personality: {},
    expectations: {}
  });

  const handleNext = (data: any) => {
    setTestData(prev => ({ ...prev, ...data }));
    setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 onNext={handleNext} />;
      case 1:
        return <Step2 onNext={handleNext} onPrev={handlePrev} />;
      case 2:
        return <Step3 onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <Step4 testData={testData} onPrev={handlePrev} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>爱情测试</h1>
      
      <div className={styles.stepNav}>
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`${styles.step} ${index === currentStep ? styles.active : ''} ${index < currentStep ? styles.completed : ''}`}
          >
            <div className={styles.stepNumber}>{index + 1}</div>
            <div className={styles.stepInfo}>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDesc}>{step.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        {currentStep === 0 && (
          <div className={styles.intro}>
            <p className={styles.description}>
              通过专业的心理测试，了解你的情感类型和潜在优势
            </p>
            <p className={styles.note}>
              测试约需15分钟，请在安静的环境下完成
            </p>
          </div>
        )}
        {renderStep()}
      </div>
    </div>
  );
} 