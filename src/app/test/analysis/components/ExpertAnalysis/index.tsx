import React from 'react';
import styles from './index.module.css';
import { useAnalysis } from '../../context/AnalysisContext';
import { getExpertAvatar } from '../../utils/avatar';

const ExpertAnalysis: React.FC = () => {
  const { state } = useAnalysis();
  const { testResult } = state;

  return (
    <div className={styles.expert}>
      <h2 className={styles.title}>专家解读</h2>
      <div className={styles.content}>
        <div className={styles.expertInfo}>
          <img 
            src={getExpertAvatar('李教授')}
            alt="专家头像"
            className={styles.expertAvatar}
          />
          <div className={styles.expertCredentials}>
            <h4>李教授</h4>
            <p>心理学博士 / 情感咨询师</p>
          </div>
        </div>
        <div className={styles.analysis}>
          {testResult.expertComments}
        </div>
      </div>
    </div>
  );
};

export default ExpertAnalysis; 