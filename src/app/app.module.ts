import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BudgetItemEffects, BudgetItemService, BudgetScreenModule } from '@wa/BudgetScreen';

import { AppComponent }  from './app.component';
import { routes } from './app.routes';
import { rootReducer } from './core';
import { MaterialModule, SharedModule } from './shared';

@NgModule({
  imports: [ 
    BrowserModule,
    BudgetScreenModule,
    EffectsModule.forRoot([BudgetItemEffects]),
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SharedModule,
    StoreModule.forRoot(rootReducer),
  ],
  providers: [ 
    BudgetItemService
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
