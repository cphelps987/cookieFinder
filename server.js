/**
 * Created by courtneyphelps on 6/28/17.
 */
/*Your server.js file should require the basic npm packages
we've used in class: express, body-parser and path.

Your node_modules should not be visiable on github.
You must have a package.json file with dependancies.*/


//npm packages
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

//creating port to deploy site
const PORT = process.env.PORT || 8080;

//run express
const app = express ();
//console.log(express); //working

//body parsing --look at documentation!!!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('public'));

require('./app/routing/htmlRoutes.js');
require('./app/routing/apiRoutes.js');

app.listen(PORT, function(){

    console.log('Server Listening on %d', PORT)
});