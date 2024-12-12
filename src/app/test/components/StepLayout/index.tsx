import React from 'react';
import styles from './index.module.css';

interface StepLayoutProps {
  children: React.ReactNode;
  title: string;
  onNext?: (data: any) => void;
  onPrev?: () => void;
  isLastStep?: boolean;
}

const StepLayout: React.FC<StepLayoutProps> = ({
  children,
  title,
  onNext,
  onPrev,
  isLastStep = false
}) => {
  return (
    <div className={styles.stepLayout}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
      <div className={styles.actions}>
        {onPrev && (
          <button 
            className={styles.prevButton}
            onClick={onPrev}
            type="button"
          >
            上一步
          </button>
        )}
        {onNext && (
          <button 
            className={styles.nextButton}
            onClick={() => onNext({})}
            type="button"
          >
            {isLastStep ? '完成测试' : '下一步'}
          </button>
        )}
      </div>
    </div>
  );
};

export default StepLayout; 