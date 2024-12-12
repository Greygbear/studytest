import React, { useState } from 'react';
import styles from './index.module.css';

interface SuggestionsProps {
  suggestions: string[];
}

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const detailsMap = {
    "加强情感表达": "通过言语和行动表达爱意,让伴侣感受到被关心和重视。可以尝试: 1.每天说一句暖心话 2.适时的肢体接触 3.记住重要的日子",
    "培养共同兴趣": "找到或发展共同的爱好,增进感情。建议: 1.一起参加兴趣课程 2.培养共同的运动习惯 3.一起规划旅行",
    "建立有效沟通": "学会倾听和表达,避免沟通障碍。方法包括: 1.保持眼神交流 2.积极回应对方 3.避免打断对方说话"
  };

  return (
    <div className={styles.suggestions}>
      <h2 className={styles.title}>改进建议</h2>
      <div className={styles.list}>
        {suggestions.map((suggestion, index) => (
          <div key={index} className={styles.item}>
            <div 
              className={styles.header}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <span className={styles.icon}>💡</span>
              <span className={styles.text}>{suggestion}</span>
              <span className={styles.arrow}>
                {expandedIndex === index ? '↑' : '↓'}
              </span>
            </div>
            {expandedIndex === index && (
              <div className={styles.details}>
                {detailsMap[suggestion as keyof typeof detailsMap]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions; 