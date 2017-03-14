/** Author: Ross Dederer
 *  email : dedererross@gmail.com
 *  date : march 2017
 */ 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import required for Angualr 2 highcharts, include it in ChartModule 
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';

// need to import the service 
import { StockService } from './stock.service';
// appconfig are where the connection properties live 
import { AppConfig } from './app.config';

// need to inlcude appconfig and StockService in the providers 
// used ANGULAR CLI To generate 
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],
  providers: [ AppConfig, StockService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
