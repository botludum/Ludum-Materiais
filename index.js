let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

let apiRoutes = require("./routes/api-routes")

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var corsMiddleware = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

    next();
}

app.use(corsMiddleware);

mongoose.connect('mongodb://localhost/ludum-materiais');

var db = mongoose.connection;
var port = process.env.PORT || 8081;

db.collection('links').insertMany([
    // MongoDB adds the _id field with an ObjectId if _id is not present
    { title: "Página oficial da Pygame", type: "Site",link: "https://www.pygame.org/news", status: "S" },
    { title: "Criando um Snake do zero com Pygame em 5 minutos (ou mais)", type: "Vídeo",link: "https://www.youtube.com/watch?v=H4TXHI9BRCQ", status: "S" }
 ])
 .then(function(result) {
   console.log("OK!", result);
 })

db.collection('links').insertMany([
    // MongoDB adds the _id field with an ObjectId if _id is not present
    { title: "Página oficial da Pygame", type: "Site",link: "https://www.pygame.org/news", status: "S" },
    { title: "Criando um Snake do zero com Pygame em 5 minutos (ou mais)", type: "Vídeo",link: "https://www.youtube.com/watch?v=H4TXHI9BRCQ", status: "S" }
])
 .then(function(result) {
    console.log("Banco populado!")
})
 
app.get('/', (req, res) => res.send('Ludum Materiais'));

app.use('/api', apiRoutes)

app.listen(port, function () {
    console.log("Running on port " + port);
});
