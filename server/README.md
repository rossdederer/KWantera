This is the server side portion of the KWantera application.  This is a standalone webAPI built using ExpressJS.  This application is required to be running for the client app. 

## Installing the necesary modules 
This application uses NodeJS to server CSV data to a client via webAPI.   NodeJS 6.9.4 is necessary to run and install the packages.  Verify you have an update to date version nodeJS installed by typing 
```
node -v
```

To install all the modules required type
```
npm install
```
## Running the node server application

After the packages have complemeted downloading, run the following commands
```
npm start
```

This will run the application on a localhost port 3000. 
```
localhost:3000
```
The node app will expose the following api calls to be access by the client 
```
localhost:3000/ibm
localhost:3000/spy
localhost:3000/tsla
```

## Third-party Dependencies 
This application implements Cors. 
Cors is a node.js Package for Express.  This will allow for cross origin requests.
