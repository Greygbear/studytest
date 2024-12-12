import React from 'react';
import styles from './index.module.css';
import StepLayout from '../StepLayout';
import { Form, Radio, Space } from 'antd';

interface Step2Props {
  onNext: (data: any) => void;
  onPrev: () => void;
}

const personalityQuestions = [
  {
    id: 'q1',
    question: '在社交场合中，你通常会：',
    options: [
      { value: 'E', label: '主动与他人交谈，享受社交' },
      { value: 'I', label: '倾向于安静观察，选择性社交' }
    ]
  },
  {
    id: 'q2',
    question: '做决定时，你更倾向于：',
    options: [
      { value: 'T', label: '依据逻辑和事实分析' },
      { value: 'F', label: '考虑感受和价值观' }
    ]
  },
  {
    id: 'q3',
    question: '在感情关系中，你更看重：',
    options: [
      { value: 'S', label: '实际的关心和具体的行动' },
      { value: 'N', label: '情感的交流和精神的共鸣' }
    ]
  },
  {
    id: 'q4',
    question: '面对问题时，你倾向于：',
    options: [
      { value: 'J', label: '制定计划，按步骤解决' },
      { value: 'P', label: '灵活应对，随机应变' }
    ]
  },
  {
    id: 'q5',
    question: '在亲密关系中，你更希望：',
    options: [
      { value: 'A', label: '保持适度的个人空间' },
      { value: 'B', label: '尽可能多的时间在一起' }
    ]
  }
];

const Step2: React.FC<Step2Props> = ({ onNext, onPrev }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then(values => {
      onNext({ personality: values });
    });
  };

  return (
    <StepLayout 
      title="个性特征测试" 
      onNext={handleSubmit}
      onPrev={onPrev}
    >
      <div className={styles.intro}>
        <p>请根据您的真实想法选择最符合的选项</p>
      </div>
      
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {personalityQuestions.map(q => (
            <Form.Item
              key={q.id}
              name={q.id}
              label={q.question}
              rules={[{ required: true, message: '请选择一个选项' }]}
            >
              <Radio.Group className={styles.optionGroup}>
                <Space direction="vertical">
                  {q.options.map(opt => (
                    <Radio 
                      key={opt.value} 
                      value={opt.value}
                      className={styles.option}
                    >
                      {opt.label}
                    </Radio>
                  ))}
                </Space>
              </Radio.Group>
            </Form.Item>
          ))}
        </Space>
      </Form>
    </StepLayout>
  );
};

export default Step2; 