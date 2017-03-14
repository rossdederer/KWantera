/** Author: Ross Dederer
 *  email : dedererross@gmail.com
 *  date : march 2017
 */ 

import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';


import { AppConfig } from './app.config';
import { Observable } from 'rxjs/Observable';
// generated using the AngularCLI 
@Injectable()
export class StockService {

  constructor(private http: Http, private AppConfig: AppConfig) 
  {
      // default constructor
  }
  // call to get ibm 2013 stock data, returned as string 
  getIbm() 
  {
    return this.http.get(this.AppConfig.apiUrl + '/ibm').map((res:Response) => res.json())
  }
  // call to get ibm 2013 stock data, returned as string 
  getSpy() 
  {
    return this.http.get(this.AppConfig.apiUrl + '/spy').map((res:Response) => res.json())
  }
  // call to get ibm 2013 stock data, returned as string 
  getTsla() 
  {
    return this.http.get(this.AppConfig.apiUrl + '/tsla').map((res:Response) => res.json())
  }

}
