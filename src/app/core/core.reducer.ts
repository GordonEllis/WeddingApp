import { BudgetReducer, BudgetState } from '@wa/BudgetScreen';

export interface AppState {
  budgetItems: BudgetState;
}

export const rootReducer = {
  budgetItems: BudgetReducer
};