import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

import * as BudgetItemActions from './budgetscreen.actions';
import { BudgetItemService } from './budgetscreen.service';

@Injectable()
export class BudgetItemEffects {

  constructor(
    private action$: Actions,
    private service: BudgetItemService,
  ) { }

  @Effect() getItems$ = this.action$.pipe(
    ofType(BudgetItemActions.GetItems.TYPE),
    mergeMap((action: BudgetItemActions.GetItems) =>
      this.service.getItems(action.itemIds).pipe(
        map(items => new BudgetItemActions.GetItemsSuccess(items))
      )
    )
  );

  @Effect() addItem$ = this.action$.pipe(
    ofType(BudgetItemActions.AddItem.TYPE),
    mergeMap((action: BudgetItemActions.AddItem) =>
      this.service.addItem(action.item)
      .pipe(
        map(item => new BudgetItemActions.AddItemSuccess(item))
      )
    )
  );
}