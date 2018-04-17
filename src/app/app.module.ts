import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent }  from './app.component';
import { BudgetScreenModule, BudgetReducer } from './BudgetScreen'
import { routes } from './app.routes';
import { SharedModule } from './shared';

@NgModule({
  imports: [ 
    BrowserModule,
    BudgetScreenModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SharedModule,
    StoreModule.forRoot(BudgetReducer),
  ],
  providers: [ ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
