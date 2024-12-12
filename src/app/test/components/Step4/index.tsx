import React, { useMemo } from 'react';
import styles from './index.module.css';
import StepLayout from '../StepLayout';
import { useRouter } from 'next/navigation';
import { Card, Space, Tag } from 'antd';
import Progress from '../Progress';

interface Step4Props {
  testData: {
    basicInfo: any;
    personality: any;
    expectations: any;
  };
  onPrev: () => void;
}

const Step4: React.FC<Step4Props> = ({ testData, onPrev }) => {
  const router = useRouter();

  const progress = useMemo(() => {
    const totalFields = Object.keys(testData).reduce((acc, key) => {
      return acc + Object.keys(testData[key]).length;
    }, 0);
    const completedFields = Object.keys(testData).reduce((acc, key) => {
      return acc + Object.values(testData[key]).filter(Boolean).length;
    }, 0);
    return Math.round((completedFields / totalFields) * 100);
  }, [testData]);

  const handleComplete = () => {
    const data = JSON.stringify(testData);
    localStorage.setItem('testData', data);
    requestAnimationFrame(() => {
      router.push('/test/analysis');
    });
  };

  return (
    <StepLayout 
      title="测试完成" 
      onNext={handleComplete}
      onPrev={onPrev}
      isLastStep
    >
      <div className={styles.container}>
        <div className={styles.progress}>
          <Progress 
            percent={progress}
            format={percent => `完成度 ${percent}%`}
          />
        </div>

        <Card className={styles.summary}>
          <h3 className={styles.summaryTitle}>测试结果预览</h3>
          
          <div className={styles.section}>
            <h4>基本信息</h4>
            <div className={styles.info}>
              <span>年龄: {testData.basicInfo.age}岁</span>
              <span>性别: {testData.basicInfo.gender === 'male' ? '男' : '女'}</span>
              <span>感情状态: {
                {
                  single: '单身',
                  dating: '恋爱中',
                  married: '已婚',
                  divorced: '离异'
                }[testData.basicInfo.relationship]
              }</span>
            </div>
          </div>

          <div className={styles.section}>
            <h4>性格特征</h4>
            <div className={styles.traits}>
              {Object.entries(testData.personality).map(([key, value]) => (
                <Tag key={key} color="blue">{value}</Tag>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h4>期望偏好</h4>
            <Space direction="vertical" className={styles.expectations}>
              <div>年龄差距：{
                {
                  younger: '比我小1-5岁',
                  same: '相仿',
                  older: '比我大1-5岁',
                  any: '年龄不是关键因素'
                }[testData.expectations.ageGap]
              }</div>
              <div>地理位置：{
                {
                  same_city: '同城',
                  nearby: '周边城市',
                  any_city: '全国范围',
                  overseas: '海外也可以'
                }[testData.expectations.distance]
              }</div>
            </Space>
          </div>
        </Card>

        <div className={styles.note}>
          <p>点击"完成测试"查看详细的分析报告</p>
          <p className={styles.tip}>报告包含性格分析、关系建议和个性化的改进方案</p>
        </div>
      </div>
    </StepLayout>
  );
};

export default Step4; 