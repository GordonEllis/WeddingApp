import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule, MaterialModule } from '@wa/shared';

import { BudgetItemEffects } from './budgetscreen.effects';
import { BudgetReducer } from './budgetscreen.reducer';
import {
  BudgetScreenComponent,
  DialogComponent } from './components';

@NgModule({
  declarations: [
    BudgetScreenComponent,
    DialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forRoot(BudgetReducer)
  ],
  exports: [
    BudgetScreenComponent,
    DialogComponent,
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [BudgetScreenComponent]
})
export class BudgetScreenModule { }