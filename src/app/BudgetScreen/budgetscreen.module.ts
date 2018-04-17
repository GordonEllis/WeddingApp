import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BudgetScreenComponent,
  DialogComponent,
} from './components';
import { SharedModule } from '@wa/shared';

@NgModule({
  declarations: [
    BudgetScreenComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule
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