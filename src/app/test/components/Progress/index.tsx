import React from 'react';
import styles from './index.module.css';

interface ProgressProps {
  percent: number;
  format?: (percent: number) => string;
}

const Progress: React.FC<ProgressProps> = ({ 
  percent, 
  format = (p) => `${p}%` 
}) => {
  return (
    <div className={styles.progressWrapper}>
      <div className={styles.circle}>
        <div className={styles.percent}>{format(percent)}</div>
        <svg viewBox="0 0 100 100" className={styles.svg}>
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            className={styles.background} 
          />
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            className={styles.progress}
            style={{
              strokeDasharray: `${percent * 2.83}, 283`
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Progress; 