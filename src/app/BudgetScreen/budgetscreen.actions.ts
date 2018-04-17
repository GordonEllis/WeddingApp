import { Action } from '@ngrx/store';

import { BudgetItem } from './models';

export class AddItem implements Action {
  public static readonly TYPE = '[BudgetScreen] Add Item';
  readonly type = AddItem.TYPE;
  constructor(public item: BudgetItem) { }
}

export class AddItemSuccess implements Action {
  public static readonly TYPE = '[BudgetScreen] Add Item Success';
  readonly type = AddItemSuccess.TYPE;
  constructor(public item: BudgetItem) { }
}

export class GetItems implements Action {
  public static readonly TYPE = '[BudgetScreen] Get Items';
  readonly type = GetItems.TYPE;
  constructor(public itemIds?: string[]) { console.log("getmeitems")}
}

export class GetItemsSuccess implements Action {
  public static readonly TYPE = '[BudgetScreen] Get Items Success';
  readonly type = GetItemsSuccess.TYPE;
  constructor(public items: BudgetItem[]) { }
}

export type ItemAction =
    AddItem |
    AddItemSuccess|
    GetItems|
    GetItemsSuccess;