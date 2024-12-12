import React from 'react';
import styles from './index.module.css';
import { useAnalysis } from '../../context/AnalysisContext';
import ErrorBoundary from '../ErrorBoundary';
import Loading from '../Loading';
import AnalysisOverview from '../AnalysisOverview';
import DetailedReport from '../DetailedReport';
import Suggestions from '../Suggestions';
import ActionPlan from '../ActionPlan';
import { generatePDF, shareReport } from '../../utils/report';
import { message } from 'antd';

const Analysis: React.FC = () => {
  const { state, dispatch } = useAnalysis();
  const { loading, error, activeSection } = state;

  const setActiveSection = (section: typeof state.activeSection) => {
    dispatch({ type: 'SET_ACTIVE_SECTION', payload: section });
  };

  const handleShare = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const shareUrl = await shareReport(state.testResult);
      await navigator.clipboard.writeText(shareUrl);
      message.success('分享链接已复制到剪贴板');
    } catch (error) {
      message.error('分享失败，请稍后重试');
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const handleSave = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      await generatePDF('analysis-report');
      message.success('报告已保存为PDF');
    } catch (error) {
      message.error('保存失败，请稍后重试');
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <ErrorBoundary>
      <div className={styles.container}>
        <div id="analysis-report">
          <h1 className={styles.title}>测试分析报告</h1>
          
          <nav className={styles.navigation}>
            <button 
              className={`${styles.navButton} ${activeSection === 'overview' ? styles.active : ''}`}
              onClick={() => setActiveSection('overview')}
            >
              总览
            </button>
            <button 
              className={`${styles.navButton} ${activeSection === 'detailed' ? styles.active : ''}`}
              onClick={() => setActiveSection('detailed')}
            >
              详细报告
            </button>
            <button 
              className={`${styles.navButton} ${activeSection === 'suggestions' ? styles.active : ''}`}
              onClick={() => setActiveSection('suggestions')}
            >
              建议
            </button>
            <button 
              className={`${styles.navButton} ${activeSection === 'action' ? styles.active : ''}`}
              onClick={() => setActiveSection('action')}
            >
              行动计划
            </button>
          </nav>

          <div className={styles.content}>
            {activeSection === 'overview' && (
              <section className={styles.section}>
                <AnalysisOverview />
              </section>
            )}
            {activeSection === 'detailed' && (
              <section className={styles.section}>
                <DetailedReport />
              </section>
            )}
            {activeSection === 'suggestions' && (
              <section className={styles.section}>
                <Suggestions suggestions={state.testResult.suggestions} />
              </section>
            )}
            {activeSection === 'action' && (
              <section className={styles.section}>
                <ActionPlan />
              </section>
            )}
          </div>
        </div>

        <div className={styles.actions}>
          <button 
            className={styles.shareButton}
            onClick={handleShare}
            disabled={loading}
          >
            {loading ? '处理中...' : '分享报告'}
          </button>
          <button 
            className={styles.saveButton}
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? '处理中...' : '保存PDF'}
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Analysis; 