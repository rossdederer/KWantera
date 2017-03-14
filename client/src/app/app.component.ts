
import { Component } from '@angular/core';
import { StockService } from './stock.service';

import { ChartModule } from 'angular2-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KWantera Stock Sample Application!';


  constructor(private stockService: StockService) 
  {
  }
   
}

