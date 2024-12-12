'use client';

import React from 'react';
import { AnalysisProvider } from './context/AnalysisContext';
import Analysis from './components/Analysis';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

// 自定义antd主题
const theme = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 4,
  },
};

export default function AnalysisPage() {
  return (
    <ConfigProvider theme={theme} locale={zhCN}>
      <AnalysisProvider>
        <div className="analysis-page">
          <Analysis />
        </div>
      </AnalysisProvider>
    </ConfigProvider>
  );
} 