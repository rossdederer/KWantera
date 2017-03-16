# KWantera Stock Sample Application 
The application is comprised into two sections /client and /server.  The client side contains the charting logic and the server side collects data located under the /data direcotry and provides access to them via a three different webapi get requests

This project Utitlizes Angular 2 built with Typescript.  It requests data from its server component and displays stock market close data in a HighChart as shown below: 
![alt text](http://i.imgur.com/rfXQRVT.png)

HighCharts 

Included is a function that calculates a moving average for a given time range.  The default here is 5, you can change this value in the default constructor for chart.component.ts

## Features
* right click to zoom onto any date range to view a more detailed view. 
Highcharts has interactive x-axis zooming built in by passing the object a zoom type
```
chart: { type: 'line',zoomType: 'x' },
```
* toggle the various series by clicking on the legends 
HighCharts does not include any regression on averages in its charting library, you need to use the stock charts for that type of funcitonality.    We can manually calculate the moving average and add it to the charting surface as a seperate series. 
```
     calculateMovingAverage(arr,currentIndex){
            // get the currentVal to begin calculating an average 
            var movingAverage = this.movingAverage;
            var currentVal = 0 ;

            // the lower bound here will be the currentIndex of the loop and subtract that from the moving average param
            // this will start calculating the average from the begining once the movingaverage parameter is hit 
            var lowerBound = currentIndex - movingAverage;
            // while we are in the safe zone loop through the array 
            while ( lowerBound < currentIndex ) {
                currentVal = currentVal +  arr[lowerBound];
                lowerBound++;
            }
            // calculate the average here,  totalvalue of currentIndex-movingAvera param divided by the moving movingAverage param 
            currentVal = currentVal / movingAverage ; 
            // push the calculated value into the array to display in the chart 
            
            return currentVal ; 
    }
```

## Dependencies, Third Party libs, Notes 
* NodeJS
* Angular 2 
* Express
* HighCharts 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.
