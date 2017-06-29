// Your htmlRoutes.js file should include two routes:
//
//     A GET Route to /survey which should display the survey page.
//     A default USE route that leads to home.html which displays the home page.


//have to do this BEFORE apiRoutes!!!!!!!
//connecting the front to the back
var path = require("path");

//server.js is going to grab this function
module.exports = function(app) {

    //home page - getting it to make the path
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
    console.log("path - htmlroutes");
    });

    //survey page - getting it to make the path
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
        console.log("path - surveyroutes")

    });
};

//make sure you have two "__" underscore dash or it WILL NOT WORK!!!!!