import React from 'react';
import styles from './index.module.css';
import StepLayout from '../StepLayout';
import { Form, Slider, Radio, Space, Rate } from 'antd';

interface Step3Props {
  onNext: (data: any) => void;
  onPrev: () => void;
}

const importanceOptions = [
  { value: 1, label: '不重要' },
  { value: 2, label: '较不重要' },
  { value: 3, label: '一般' },
  { value: 4, label: '比较重要' },
  { value: 5, label: '非常重要' }
];

const expectationItems = [
  {
    id: 'appearance',
    label: '外表与形象',
    description: '对伴侣外貌、穿着等方面的期望'
  },
  {
    id: 'personality',
    label: '性格特质',
    description: '包括性格开朗程度、处事方式等'
  },
  {
    id: 'career',
    label: '事业发展',
    description: '职业规划、工作态度等'
  },
  {
    id: 'family',
    label: '家庭观念',
    description: '对家庭责任、未来规划的看法'
  },
  {
    id: 'interests',
    label: '兴趣爱好',
    description: '共同的爱好和生活方式'
  }
];

const Step3: React.FC<Step3Props> = ({ onNext, onPrev }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then(values => {
      onNext({ expectations: values });
    });
  };

  return (
    <StepLayout 
      title="伴侣期望" 
      onNext={handleSubmit}
      onPrev={onPrev}
    >
      <div className={styles.intro}>
        <p>请根据您的真实想法评价以下方面的重要程度</p>
      </div>
      
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {expectationItems.map(item => (
            <div key={item.id} className={styles.expectationItem}>
              <Form.Item
                name={item.id}
                label={
                  <div className={styles.itemLabel}>
                    <span className={styles.itemTitle}>{item.label}</span>
                    <span className={styles.itemDesc}>{item.description}</span>
                  </div>
                }
                rules={[{ required: true, message: '请评价重要程度' }]}
              >
                <Rate 
                  className={styles.rateGroup}
                  tooltips={importanceOptions.map(opt => opt.label)}
                />
              </Form.Item>
            </div>
          ))}

          <Form.Item
            name="ageGap"
            label="理想的年龄差距"
            rules={[{ required: true, message: '请选择年龄差距' }]}
          >
            <Radio.Group className={styles.radioGroup}>
              <Space direction="vertical">
                <Radio value="younger">比我小1-5岁</Radio>
                <Radio value="same">相仿</Radio>
                <Radio value="older">比我大1-5岁</Radio>
                <Radio value="any">年龄不是关键因素</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="distance"
            label="可接受的距离"
            rules={[{ required: true, message: '请选择可接受的距离' }]}
          >
            <Radio.Group className={styles.radioGroup}>
              <Space direction="vertical">
                <Radio value="same_city">同城</Radio>
                <Radio value="nearby">周边城市</Radio>
                <Radio value="any_city">全国范围</Radio>
                <Radio value="overseas">海外也可以</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Space>
      </Form>
    </StepLayout>
  );
};

export default Step3; 