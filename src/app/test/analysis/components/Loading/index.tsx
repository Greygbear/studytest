import React from 'react';
import styles from './index.module.css';

interface LoadingProps {
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ text = '加载中...' }) => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div className={styles.bounce3}></div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Loading; 