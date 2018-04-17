import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { MatTableModule, MatDialog } from '@angular/material';
import { DialogComponent } from './dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@wa/core';
import { BudgetItem } from '@wa/BudgetScreen/Models';
import { GetItems } from '@wa/BudgetScreen/budgetscreen.actions';


@Component({
  selector: 'budgetscreen',
  templateUrl: `budgetscreen.component.html`,
})

export class BudgetScreenComponent implements OnInit {
  dataSource:  MatTableDataSource<BudgetItem>;
  displayedColumns: string[] = ['itemdescription', 'itemcost', 'itempaid'];

  constructor(public dialog: MatDialog,
              private store: Store<AppState>) {
    this.store.dispatch(new GetItems());
  }

  ngOnInit(){
    this.store.select(s => s.budgetItems).subscribe(items =>{
      this.dataSource = new MatTableDataSource<BudgetItem>([{ ItemId: 1, ItemDescription: "Venue", ItemCost: 1, ItemPaid: 1 },
      { ItemId: 2, ItemDescription: "Dress", ItemCost: 1, ItemPaid: 1 },
      { ItemId: 3, ItemDescription: "Kilt", ItemCost: 1, ItemPaid: 1 },
      { ItemId: 4, ItemDescription: "Booze", ItemCost: 1, ItemPaid: 1 }]);
    })
  }

  addItem() {
    this.dialog.open(DialogComponent);
  }
}
