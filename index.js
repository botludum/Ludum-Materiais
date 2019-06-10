let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let apiRoutes = require("./routes/api-routes")

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var corsMiddleware = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //replace localhost with actual host
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

    next();
}

app.use(corsMiddleware);

// Connect to Mongoose and set connection variable
mongoose.connect(process.env.MONGODB_URI);

var db = mongoose.connection;
var port = process.env.PORT || 8081;

// Send message for default URL
app.get('/', (req, res) => res.send('Ludum Materiais'));

// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running on port " + port);
});
