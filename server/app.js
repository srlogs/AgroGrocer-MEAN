//  Enter requirements
const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const route = require('./routes/route');
var path = require('path');

app.use(cors());
app.use(bodyparser.json());
//  routes
app.use('/api', route);
//  static files
app.use(express.static(__dirname + 'public'));


//  database connection
mongoose.connect('mongodb://localhost:27017/usersData');

//checking connection
mongoose.connection.on('connected', () => {
    console.log('connected successfully in the port of : 27017');
});

mongoose.connection.on('error', (err) => {
    if(err)
    {
      console.log(err);
    }
});


//  port number
const port = 3000;
var allowCrossDomain = function(req, res, next) {
        // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
   next();
}

app.get('/', (req, res)=>{
  res.send("this is working");
});
app.listen(port, ()=>{
  console.log('server is running in the port '+port);
});
