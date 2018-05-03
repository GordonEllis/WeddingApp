import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BudgetScreenComponent,
  DialogComponent,
} from './components';
import { BudgetItemEffects } from './budgetscreen.effects';
import { SharedModule } from '@wa/shared';
import { EffectsModule } from '@ngrx/effects';
import { BudgetReducer } from './budgetscreen.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    BudgetScreenComponent,
    DialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
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