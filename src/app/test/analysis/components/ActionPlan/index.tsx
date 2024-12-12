import React from 'react';
import styles from './index.module.css';
import { useAnalysis } from '../../context/AnalysisContext';

const ActionPlan: React.FC = () => {
  const { state, dispatch } = useAnalysis();
  const { actionPlan } = state;

  const toggleComplete = (id: number) => {
    dispatch({
      type: 'UPDATE_ACTION_ITEM',
      payload: {
        id,
        updates: {
          completed: !actionPlan.items.find(item => item.id === id)?.completed
        }
      }
    });
  };

  const setReminder = (id: number, date: string) => {
    dispatch({
      type: 'UPDATE_ACTION_ITEM',
      payload: {
        id,
        updates: {
          reminder: new Date(date)
        }
      }
    });
  };

  const completedCount = actionPlan.items.filter(item => item.completed).length;
  const progress = (completedCount / actionPlan.items.length) * 100;

  return (
    <div className={styles.actionPlan}>
      <h2 className={styles.title}>行动计划</h2>
      
      <div className={styles.progress}>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className={styles.progressText}>
          完成进度: {completedCount}/{actionPlan.items.length}
        </span>
      </div>

      <div className={styles.list}>
        {actionPlan.items.map(item => (
          <div 
            key={item.id} 
            className={`${styles.item} ${item.completed ? styles.completed : ''}`}
          >
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(item.id)}
              />
              <span className={styles.checkmark} />
            </label>
            
            <span className={styles.content}>{item.content}</span>
            
            <input
              type="datetime-local"
              className={styles.reminder}
              onChange={(e) => setReminder(item.id, e.target.value)}
              value={item.reminder?.toISOString().slice(0, 16) || ''}
              disabled={item.completed}
            />
          </div>
        ))}
      </div>

      {actionPlan.items.length === 0 && (
        <div className={styles.empty}>
          暂无行动计划项目
        </div>
      )}
    </div>
  );
};

export default ActionPlan; 