import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { mockTestResult } from '../mock/testData';

interface AnalysisState {
  testResult: {
    score: number;
    personality: {
      type: string;
      traits: string[];
    };
    suggestions: string[];
    expertComments: string;
    actionItems: string[];
  };
  actionPlan: {
    items: Array<{
      id: number;
      content: string;
      completed: boolean;
      reminder?: Date;
    }>;
  };
  loading: boolean;
  error: string | null;
  activeSection: 'overview' | 'detailed' | 'suggestions' | 'action';
}

type Action = 
  | { type: 'SET_TEST_RESULT'; payload: AnalysisState['testResult'] }
  | { type: 'UPDATE_ACTION_ITEM'; payload: { id: number; updates: Partial<AnalysisState['actionPlan']['items'][0]> } }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_ACTIVE_SECTION'; payload: AnalysisState['activeSection'] };

const initialState: AnalysisState = {
  testResult: {
    score: 0,
    personality: {
      type: '',
      traits: []
    },
    suggestions: [],
    expertComments: '',
    actionItems: []
  },
  actionPlan: {
    items: []
  },
  loading: false,
  error: null,
  activeSection: 'overview'
};

const AnalysisContext = createContext<{
  state: AnalysisState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

function analysisReducer(state: AnalysisState, action: Action): AnalysisState {
  switch (action.type) {
    case 'SET_TEST_RESULT':
      return {
        ...state,
        testResult: action.payload,
        actionPlan: {
          items: action.payload.actionItems.map((content, index) => ({
            id: index + 1,
            content,
            completed: false
          }))
        }
      };
    case 'UPDATE_ACTION_ITEM':
      return {
        ...state,
        actionPlan: {
          items: state.actionPlan.items.map(item =>
            item.id === action.payload.id
              ? { ...item, ...action.payload.updates }
              : item
          )
        }
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload };
    default:
      return state;
  }
}

export const AnalysisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(analysisReducer, initialState);

  // 从localStorage加载保存的状态
  useEffect(() => {
    const savedState = localStorage.getItem('analysisState');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        dispatch({ type: 'SET_TEST_RESULT', payload: parsed.testResult });
      } catch (error) {
        console.error('Failed to load saved state:', error);
      }
    }
  }, []);

  // 保存状态到localStorage
  useEffect(() => {
    localStorage.setItem('analysisState', JSON.stringify({
      testResult: state.testResult,
      actionPlan: state.actionPlan
    }));
  }, [state.testResult, state.actionPlan]);

  // 在 AnalysisProvider 中添加
  useEffect(() => {
    // 模拟API调用
    dispatch({ type: 'SET_LOADING', payload: true });
    setTimeout(() => {
      dispatch({ type: 'SET_TEST_RESULT', payload: mockTestResult });
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 1000);
  }, []);

  return (
    <AnalysisContext.Provider value={{ state, dispatch }}>
      {children}
    </AnalysisContext.Provider>
  );
};

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error('useAnalysis must be used within an AnalysisProvider');
  }
  return context;
} 