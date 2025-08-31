import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { SalesComponent } from './components/sales/sales.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SalesComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClient,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
