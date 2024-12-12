# 项目设计文档

## 项目概述

这是一个使用 Next.js App Router 构建的现代 Web 应用程序模板。

## 目录结构 
.
├── src/
│ ├── app/ # App Router 主目录
│ │ ├── layout.tsx # 根布局组件
│ │ ├── page.tsx # 首页组件
│ │ ├── globals.css # 全局样式
│ │ └── fonts/ # 本地字体文件
│ ├── components/ # 共享组件
│ └── types/ # TypeScript 类型定义
├── public/ # 静态资源
├── tailwind.config.ts # Tailwind 配置
├── next.config.ts # Next.js 配置
└── package.json # 项目依赖


## 技术栈

- **框架**: Next.js 15.0.4
- **运行时**: React 19
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **代码规范**: ESLint
- **字体**: Geist (本地优化加载)

## 关键特性

### 1. 字体系统
- 使用 next/font/local 加载 Geist 字体
- 支持可变字重 (100-900)
- 包含 Sans 和 Mono 两种字体变体

### 2. 主题系统
- 支持亮色/暗色模式自动切换
- 使用 CSS 变量定义主题色
- 通过 Tailwind 扩展实现主题集成

### 3. 类型系统
- 启用 TypeScript 严格模式
- 配置模块路径别名 (@/*)
- 完整的类型声明文件

### 4. 样式系统
- Tailwind JIT 编译
- 自定义颜色变量
- 响应式设计支持

## 开发规范

### 代码风格
- 使用 ESLint 进行代码检查
- 遵循 Next.js 核心 Web Vitals
- TypeScript 严格模式

### 文件组织
- 页面组件放在 app 目录
- 共享组件放在 components 目录
- 类型定义放在 types 目录

### 构建优化
- 图片自动优化
- 字体文件本地化
- 样式按需编译

## 启动开发
bash
npm install # 安装依赖
npm run dev # 启动开发服务器访问 http://localhost:3000 查看应用