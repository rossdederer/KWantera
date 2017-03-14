# KWantera Stock Sample Application 
The application is broken into two parts.  The client side that contains the charting logic and the server side which collects data located under the /data direcotry and provides access to them via a webapi/ 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

This project Utitlizes Angular 2 built with Typescript.  It requests data from its server component and displays stock market close data in a HighChart as shown below: 
![alt text](http://i.imgur.com/rfXQRVT.png)

Included is a function that calculates a moving average for a given time range.  The default here is 5, you can change this value in the default constructor for chart.component.ts

## Dependencies, Third Party libs, Notes 
* NodeJS
* Angular 2 
* Express
* HighCharts 
