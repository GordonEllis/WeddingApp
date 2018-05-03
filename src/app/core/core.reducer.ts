
import { BudgetState, BudgetReducer } from '@wa/BudgetScreen/budgetscreen.reducer';

export interface AppState {
  budgetItems: BudgetState;
}

export const rootReducer = {
  budgetItems: BudgetReducer
};