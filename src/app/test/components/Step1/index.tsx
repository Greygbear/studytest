import React, { useState } from 'react';
import styles from './index.module.css';
import StepLayout from '../StepLayout';
import { Form, Input, Select, Radio } from 'antd';

const { Option } = Select;

interface Step1Props {
  onNext: (data: any) => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then(values => {
      onNext({ basicInfo: values });
    });
  };

  return (
    <StepLayout title="基础信息" onNext={handleSubmit}>
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="age"
          label="年龄"
          rules={[{ required: true, message: '请选择您的年龄' }]}
        >
          <Select placeholder="请选择">
            {Array.from({ length: 63 }, (_, i) => i + 18).map(age => (
              <Option key={age} value={age}>{age}岁</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="gender"
          label="性别"
          rules={[{ required: true, message: '请选择您的性别' }]}
        >
          <Radio.Group>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="relationship"
          label="感情状态"
          rules={[{ required: true, message: '请选择您的感情状态' }]}
        >
          <Select placeholder="请选择">
            <Option value="single">单身</Option>
            <Option value="dating">恋爱中</Option>
            <Option value="married">已婚</Option>
            <Option value="divorced">离异</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="education"
          label="教育程度"
          rules={[{ required: true, message: '请选择您的教育程度' }]}
        >
          <Select placeholder="请选择">
            <Option value="highSchool">高中及以下</Option>
            <Option value="college">大专</Option>
            <Option value="bachelor">本科</Option>
            <Option value="master">硕士</Option>
            <Option value="phd">博士及以上</Option>
          </Select>
        </Form.Item>
      </Form>
    </StepLayout>
  );
};

export default Step1; 