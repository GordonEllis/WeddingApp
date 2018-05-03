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
    this.store.select(s => s.budgetItems).subscribe(items =>{
      console.log(items.data);
      this.dataSource = new MatTableDataSource<BudgetItem>(items.data);
    })
  }

  ngOnInit(){
    this.store.dispatch(new GetItems());
  }

  addItem() {
    this.dialog.open(DialogComponent);
  }
}
