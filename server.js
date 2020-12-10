// Express is for building the Rest apis
const express = require("express");
// body-parser helps to parse the request and create the req.body object
const bodyParser = require("body-parser");
// cors provides Express middleware to enable CORS with various options.
const cors = require("cors");

const app = express()

// use CORS middleware
app.use(cors())

// parse requests of content-type - application/json
app.use(bodyParser.json());

// set up mongoDB and mongoose and automatically grab index file within models
const db = require('./server/models/')
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connected to the database")
  }).catch(err => {
    console.log("Cannot connect to database:", err)
    process.exit() //helps keep console clean
  })

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our node application." });
});

//require all routes
require('./server/routes/tutorial.routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//INCLUDE SOMETHING SIMILAR TO BELOW FOR P3
/*
###### The routes we will be creating! #########
###### You should have something like this in your readme so people know your routes that end up consuming your api #########

Methods  	Urls	Actions
GET   api/tutorials	get all Tutorials - DONE
GET	  api/tutorials/:id	get Tutorial by id - DONE
POST  api/tutorials	add new Tutorial - DONE
PUT	  api/tutorials/:id	update Tutorial by id - DONE
DELETE	api/tutorials/:id	remove Tutorial by id - DONE
DELETE	api/tutorials	remove all Tutorials
GET	   api/tutorials/published	find all published Tutorials - DONE
GET	   api/tutorials?title=[kw]	find all Tutorials which title contains 'kw'
*/
