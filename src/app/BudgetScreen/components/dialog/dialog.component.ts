import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '@wa/core';
import { AddItem } from '@wa/BudgetScreen/budgetscreen.actions';
import { BudgetItem } from '@wa/BudgetScreen/models';

@Component({
  selector: 'dialogComponent',
  templateUrl: 'dialog.component.html',
})

export class DialogComponent {
  itemForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<DialogComponent>,
              private formBuilder: FormBuilder,
              private store: Store<AppState> ){
    this.itemForm = this.formBuilder.group({
      ItemDescription: ['', Validators.required],
      ItemCost: [0, Validators.required],
      ItemPaid: [0, Validators.required]
    })
  }

  onSubmit() {
    var newItem: BudgetItem = this.itemForm.value;
    newItem.ItemId = 5;
    this.store.dispatch(new AddItem(newItem));
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}