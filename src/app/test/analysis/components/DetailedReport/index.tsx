import React from 'react';
import styles from './index.module.css';
import { useAnalysis } from '../../context/AnalysisContext';

const DetailedReport: React.FC = () => {
  const { state } = useAnalysis();
  const { testResult } = state;

  const personalityTraits = [
    {
      category: '沟通方式',
      traits: ['倾听能力', '表达清晰度', '情感表达'],
      scores: [85, 75, 80],
      descriptions: [
        '善于倾听他人的想法和感受',
        '能够清晰地表达自己的想法',
        '擅长表达情感和共情'
      ]
    },
    {
      category: '情感特质',
      traits: ['共情能力', '情感稳定性', '亲密度'],
      scores: [90, 82, 78],
      descriptions: [
        '具有很强的同理心和理解力',
        '情绪稳定,不易受外界影响',
        '能够建立和维护亲密关系'
      ]
    },
    {
      category: '处事态度',
      traits: ['责任心', '包容度', '适应能力'],
      scores: [88, 85, 83],
      descriptions: [
        '对关系有很强的责任感',
        '能够包容和接纳他人的不同',
        '较强的环境适应能力'
      ]
    }
  ];

  return (
    <div className={styles.report}>
      <h2 className={styles.title}>详细分析报告</h2>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>性格类型解析</h3>
        <div className={styles.typeAnalysis}>
          <div className={styles.typeCard}>
            <h4 className={styles.typeHeader}>{testResult.personality.type}</h4>
            <p className={styles.typeDescription}>
              {testResult.personality.type}类型的人在情感关系中表现出独特的特质和优势。
              您的性格特点使您能够在关系中扮演重要角色。
            </p>
            <ul className={styles.typeTraits}>
              {testResult.personality.traits.map((trait, index) => (
                <li key={index} className={styles.typeTrait}>
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>特质详细分析</h3>
        <div className={styles.traitsAnalysis}>
          {personalityTraits.map((category, index) => (
            <div key={index} className={styles.category}>
              <h4 className={styles.categoryTitle}>{category.category}</h4>
              <div className={styles.traits}>
                {category.traits.map((trait, i) => (
                  <div key={i} className={styles.traitItem}>
                    <div className={styles.traitInfo}>
                      <div className={styles.traitName}>{trait}</div>
                      <div className={styles.traitDescription}>
                        {category.descriptions[i]}
                      </div>
                    </div>
                    <div className={styles.traitScore}>
                      <div className={styles.scoreBarContainer}>
                        <div 
                          className={styles.scoreBar}
                          style={{ width: `${category.scores[i]}%` }}
                        />
                      </div>
                      <span className={styles.scoreNumber}>
                        {category.scores[i]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>专家点评</h3>
        <div className={styles.expertComments}>
          <div className={styles.expertInfo}>
            <img 
              src="/images/expert-avatar.png" 
              alt="专家头像"
              className={styles.expertAvatar}
            />
            <div className={styles.expertCredentials}>
              <h4>李教授</h4>
              <p>心理学博士 / 情感咨询师</p>
            </div>
          </div>
          <div className={styles.comments}>
            {testResult.expertComments}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedReport; 