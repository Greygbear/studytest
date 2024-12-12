import React from 'react';
import styles from './index.module.css';
import { useAnalysis } from '../../context/AnalysisContext';

const AnalysisOverview: React.FC = () => {
  const { state } = useAnalysis();
  const { testResult } = state;

  return (
    <div className={styles.overview}>
      <h2 className={styles.title}>测试结果总览</h2>
      
      <div className={styles.scoreCard}>
        <div className={styles.score}>
          <span className={styles.number}>{testResult.score}</span>
          <span className={styles.label}>总分</span>
        </div>
        
        <div className={styles.personality}>
          <h3 className={styles.type}>{testResult.personality.type}</h3>
          <div className={styles.traits}>
            {testResult.personality.traits.map((trait, index) => (
              <span key={index} className={styles.trait}>
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.summary}>
        <h3 className={styles.summaryTitle}>性格特征总结</h3>
        <p className={styles.summaryText}>
          根据您的测试结果,您是一个{testResult.personality.traits.join("、")}的人。
          这些特质使您在情感关系中具有独特的优势和潜在的发展空间。
        </p>
      </div>
    </div>
  );
};

export default AnalysisOverview; 