import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort } from '@angular/material';
import { Store } from '@ngrx/store';
import { BudgetItem } from '@wa/BudgetScreen/Models';
import { GetItems } from '@wa/BudgetScreen/budgetscreen.actions';
import { AppState } from '@wa/core';

import { DialogComponent } from './dialog';

@Component({
  selector: 'budgetscreen',
  templateUrl: `budgetscreen.component.html`,
})

export class BudgetScreenComponent implements OnInit {
  dataSource:  MatTableDataSource<BudgetItem>;
  displayedColumns: string[] = ['itemdescription', 'itemcost', 'itempaid', 'outstanding'];
  
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              private store: Store<AppState>) {
      this.store.select(s => s.budgetItems).subscribe(items =>{
      this.dataSource = new MatTableDataSource<BudgetItem>(items.data);
      this.dataSource.filterPredicate = (data: BudgetItem, filter: string) => data.ItemDescription.toLowerCase().indexOf(filter) != -1;
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(){
    this.store.dispatch(new GetItems());
  }

  addItem() {
    this.dialog.open(DialogComponent);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}


