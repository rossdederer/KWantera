/** Author: Ross Dederer
 *  email : dedererross@gmail.com
 *  date : march 2017
 */ 
import { Component, OnInit } from '@angular/core';
import { StockService } from './../stock.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {

    // options for highcharts charts 
    options: Object;

    // need some temporary variables to hold some data from the webapi 
    ibmdatares  : any ;
    spydatares : any ; 
    tsladatares : any ; 
    movingAverage: any; 

    // data arrays for the highchart for the three series 
    chartDataIbm : any = [] ; 
    chartDataSpy : any = [] ;
    chartDataTsla : any = [] ;
    
    // pull the dates out of the array to bind to the categories section of the chart 
    chartDates: any = [] ;

    // variables for the moving averages 
    averageIBM: any =[]; 
    averageTSLA: any = []; 
    averageSPY: any = []; 

    constructor(private stockService: StockService) {
        this.movingAverage = 5; 
        // default constructor
    }

    ngOnInit() {
        // call the functions to load the data 
        this.loadData(); 
    }
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


    buildIBMArray(){
        // split the csv data by new lines and build an array of rows 
        var rows = this.ibmdatares.split('\n');
         // loop through all the rows in the array
        for(var currentIndex = 1 ; currentIndex < rows.length ; currentIndex++ )
        {
            // split each row up by the CSV , demlimiter and build individual record 
            var records = rows[currentIndex].split(',');
      
            // insert the close value, indice 5, into the array for the chart 
            this.chartDataIbm.push(parseInt(records[4]));
            this.chartDates.push(new Date(records[0]));
            if(currentIndex > this.movingAverage) 
            this.averageIBM.push(this.calculateMovingAverage(this.chartDataIbm,currentIndex));
        }
    }
    
    buildSPYArray(){
        // split the csv data by new lines and build an array of rows 
        var rows = this.spydatares.split('\n');
        // loop through all the rows in the array 
        for(var currentIndex = 1 ; currentIndex < rows.length ; currentIndex++ )
        {
            // split each row up by the CSV , demlimiter and build individual record 
            var records = rows[currentIndex].split(',');
   
            // insert the close value, indice 5, into the array for the chart 
            this.chartDataSpy.push(parseInt(records[4]));
            if(currentIndex > this.movingAverage) 
            this.averageSPY.push(this.calculateMovingAverage(this.chartDataSpy,currentIndex));
        }
    }
    buildTSLAArray() {
        // split the csv data by new lines and build an array of rows 
        var rows = this.tsladatares.split('\n');
        // loop through all the rows in the array 
        for(var currentIndex = 1 ; currentIndex < rows.length ; currentIndex++ )
        {
            // split each row up by the CSV , demlimiter and build individual record 
            var records = rows[currentIndex].split(',');
    
            // insert the close value, indice 5, into the array for the chart 
            this.chartDataTsla.push(parseInt(records[4]));
            if(currentIndex > this.movingAverage) 
            this.averageTSLA.push(this.calculateMovingAverage(this.chartDataTsla,currentIndex));
        }
    }
    

    // three seperate WebAPI calls to return the values for each stock.  
    loadData(){
    // call web api to get IBM Csv data 
    // configure the highcharts  
    // these values are used to calcuate the moving average of the points 
    var currentVal ; 
    var movingAverage = this.movingAverage;

    this.stockService.getIbm().subscribe(
        response => {
            this.ibmdatares = response;
            this.buildIBMArray(); 
            this.drawGraph(); 
    }); 

    this.stockService.getSpy().subscribe(
        response => {
            this.spydatares = response;
            this.buildSPYArray(); 
            this.drawGraph(); 
    }); 

    this.stockService.getTsla().subscribe(
        response =>   
        { 
            this.tsladatares = response;
            this.buildTSLAArray();
            this.drawGraph(); 
        }); 
    }
    
    drawGraph(){
        // HighCharts takes an Object of options.
        // I configure the series options here 
        // the options are pretty self-explanatory here, I do some formatting on the axis values
        // set a title, configure the zoom-type which is built into highcharts 
        // I bind the x-axis to the array of ChartDates 
        // I create 6 series for data, three for raw and 3 for the moving average 
        this.options = {
            title : { text : 'Closing Stock values for 2013 per business day w/ moving average '+this.movingAverage +' days'},
            chart: { type: 'line',zoomType: 'x' },
            xAxis: {
                categories: this.chartDates,
                tickInterval: 1,
                title: {
                    enabled: true,
                    text: 'Trading dates',
                    style: {
                        fontWeight: 'normal'
                    }
                },
                labels:{
                    rotation: 20,
                    formatter: function() {
                        return new Date(this.value).toDateString(); 
                    }
                },
                 type: 'datetime',
            },

            legend: {
            align: 'center'},
            yAxis: {
                title: {
                    enabled: true,
                    text: 'Stock closing price',
                    style: {
                        fontWeight: 'normal'
                    }
                },
                labels:{
                    formatter: function() {
                        return '$'+this.value +'.00'; 
                    }
                },
                 type: 'datetime',
            },
        
            plotOptions: {
            line: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'IBM',
                data:  this.chartDataIbm,
                color: '#4188ff',
            },{
                name: 'SPY',
                data:  this.chartDataSpy,
                color: '#0f9200'
            },{
                name: 'TSLA',
                data:  this.chartDataTsla,  
                color: '#800080'
            }, {
                name: 'IBM Moving Average',
                data: this.averageIBM,
                color: '#accbff'
            },{
                name: 'SPY Moving Average',
                data: this.averageSPY,
                color: 	'#a4fba6'
            },{
                name: 'TSLA Moving Average',
                data: this.averageTSLA,
                color: '#efbbff'
            }
            
            ]
        };
    }
}
