import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '@wa/core';
import { AddItem } from '@wa/BudgetScreen/budgetscreen.actions';

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
      itemDescription: ['', Validators.required],
      itemCost: [0, Validators.required],
      itemPaid: [0, Validators.required]
    })
  }

  onSubmit() {
    this.store.dispatch(new AddItem(this.itemForm.value));
  }
}