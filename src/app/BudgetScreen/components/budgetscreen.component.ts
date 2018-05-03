import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@angular/material';
import { MatTableDataSource, MatDialog, MatSort } from '@angular/material';
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
  displayedColumns: string[] = ['itemdescription', 'itemcost', 'itempaid', 'outstanding'];
  
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              private store: Store<AppState>) {
    this.store.select(s => s.budgetItems).subscribe(items =>{
      this.dataSource = new MatTableDataSource<BudgetItem>(items.data);
      this.dataSource.filterPredicate = (data: BudgetItem, filter: string) => data.ItemDescription.indexOf(filter) != -1;
    })
  }

  ngOnInit(){
    this.store.dispatch(new GetItems());
  }

  addItem() {
    this.dialog.open(DialogComponent);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}


