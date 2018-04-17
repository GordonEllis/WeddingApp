import { BudgetItem } from './models';
import * as BudgetActions from './budgetscreen.actions';

export interface BudgetState {
  data: BudgetItem[];
  hasError: boolean;
  isLoading: boolean;
}

const initialState: BudgetState = {
  data: [],
  hasError: false,
  isLoading: false
};

export function BudgetReducer(state = initialState, action: BudgetActions.ItemAction): BudgetState {
  switch (action.type) {
    case BudgetActions.GetItemsSuccess.TYPE: {
        return {
          ...state,
          data: action.items
        };
      }
    case BudgetActions.AddItemSuccess.TYPE: {
      return {
        ...state,
        hasError: false,
        data: state.data.concat([action.item])
      };
    }
    default: {
      return state;
    }
  }
}