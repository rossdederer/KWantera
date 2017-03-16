# KWantera Stock Sample Application 
The application is comprised into two sections /client and /server.  The client side contains the charting logic and the server side collects data located under the /data direcotry and provides access to them via a three different webapi get requests
 It requests data from its server component and displays stock market close data in a HighChart as shown below: 
![alt text](http://i.imgur.com/4bzjKsU.png)

HighCharts 

Included is a function that calculates a moving average for a given time range.  The default here is 5, you can change this value in the default constructor for chart.component.ts

## Features
* This project Utitlizes <b>Angular 2</b> built with <b>Typescript</b>.  
* right click to zoom onto any date range to view a more detailed view. 
Highcharts has <b>interactive x-axis zooming</b> built in by passing the object a zoom type
```javascript
chart: { 
   type: 'line',
   zoomType: 'x' 
},
```
* toggle the various series by clicking on the legends 
HighCharts does not include any regression on averages in its charting library, you need to use the stock charts for that type of funcitonality.    We can manually <b>calculate the moving average</b> and add it to the charting surface as a seperate series. 
```javascript
calculateMovingAverage(arr,currentIndex){
   var movingAverage = this.movingAverage,
       currentVal = 0,
       lowerBound = currentIndex - movingAverage;
            
    while ( lowerBound < currentIndex ) {
       currentVal = currentVal +  arr[lowerBound];
       lowerBound++;
    }
    currentVal = currentVal / movingAverage ;       
    return currentVal ; 
}
```
* the HighCharts line chart has native support for <b>interactive toggling</b> between the various stocks.   Click on the series in the legend to show or hide the various series. 

## Dependencies, Third Party libs, Notes 
* NodeJS
* Angular 2 
* Express
* HighCharts 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.
