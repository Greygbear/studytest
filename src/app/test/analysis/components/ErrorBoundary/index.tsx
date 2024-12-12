import React, { Component, ErrorInfo } from 'react';
import styles from './index.module.css';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Analysis error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.error}>
          <h2>很抱歉,出现了一些问题</h2>
          <p>请刷新页面重试或联系客服</p>
          <button 
            className={styles.retryButton}
            onClick={() => window.location.reload()}
          >
            刷新页面
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 