// Express is for building the Rest apis
const express = require("express");
// body-parser helps to parse the request and create the req.body object
const bodyParser = require("body-parser");
// cors provides Express middleware to enable CORS with various options.
const cors = require("cors");

const app = express()
/*
Notice that we set origin: http://localhost:8081.
– define a GET route which is simple for test.
– listen on port 8080 for incoming requests.
*/
let corsOptions = {
    origin: "http://localhost:8081"
}
app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our node application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


/*
###### The routes we will be creating! #########

Methods  	Urls	Actions
GET   api/tutorials	get all Tutorials
GET	  api/tutorials/:id	get Tutorial by id
POST  api/tutorials	add new Tutorial
PUT	  api/tutorials/:id	update Tutorial by id
DELETE	api/tutorials/:id	remove Tutorial by id
DELETE	api/tutorials	remove all Tutorials
GET	   api/tutorials/published	find all published Tutorials
GET	   api/tutorials?title=[kw]	find all Tutorials which title contains 'kw'
*/