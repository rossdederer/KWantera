# KWantera Stock Sample Application 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.
This project Utitlizes Angular 2 built with Typescript.  It requests data from its server component and displays stock market close data in a HighChart as shown below: 
![alt text](http://i.imgur.com/rfXQRVT.png)

Included is a function that calculates a moving average for a given time range. 
## Installing the necesary modules 
This application uses NodeJS to server CSV data to a client via webAPI.   NodeJS 6.9.4 is necessary to run and install the packages.  Verify you have an update to date version nodeJS installed by typing 
```
node -v
```

To install all the modules required type
```
npm install
```



## Running the Application
The application runs on Node.   
```
npm start
```
will build and deploy the application to `localhost` on the default node port `4200`
```
localhost:4200
```
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Futher Help 
