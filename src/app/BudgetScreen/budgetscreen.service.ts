import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BudgetItem } from './models';

@Injectable()
export class BudgetItemService {
  public constructor(private http: HttpClient) { }

  getItems(ids?: string[]): Observable<BudgetItem[]> {
  var items: BudgetItem[] = [{ ItemId: 1, ItemDescription: "Venue", ItemCost: 1, ItemPaid: 1 },
                            { ItemId: 2, ItemDescription: "Dress", ItemCost: 1, ItemPaid: 1 },
                            { ItemId: 3, ItemDescription: "Kilt", ItemCost: 1, ItemPaid: 1 },
                            { ItemId: 4, ItemDescription: "Booze", ItemCost: 1, ItemPaid: 1 }];
                            
    return Observable.of(items);
  }

  addItem(item: BudgetItem): Observable<any> {
    return Observable.of(item);
  }
}