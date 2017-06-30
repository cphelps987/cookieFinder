// Your apiRoutes.js file should contain two routes:
//
//     A GET route with the url /api/friends. This will be used to display
//     a JSON of all possible friends.
//     A POST routes /api/friends. This will be used to handle
//     incoming survey results. This route will also be used to handle the
//     compatibility logic.

var cookies = require('../data/cookies.js');
var path = require('path');

//server.js is going to grab this function
module.exports = function(app) {

    app.get("/api/cookies", function (req, res) {
        res.json(cookies);
    });
    //pulling information from app.js
   /* app.post("/api/cookies", function(req, res) {
        console.log("req.body.name: " + req.body.name);
        console.log("req.body.score.length" + req.body.score.length);

        let matchCookies = {},

        for (let i = 0; i < cookies.length; i++) {
            const differArray = [];
            const totalDiff = 0;

            for (let j =0; j < cookie[i].length; j++) {
                differArray.push (Math.abs ( req.body.score[j] - cookies[i].scorees[j]))
            }

        }
    )};*/

    app.post('/api/cookies', function(req, res){

        console.log('req.body.name: ' + req.body.name);
        console.log('req.body.scores.length: ' + req.body.scores.length);

        for (let i = 0; i < cookies.length; i++) {

            let diffArray = [];
            let totalDiff = 0;

            for (let j = 0; j < cookies[i].scores.length; j++) {

                diffArray.push(Math.abs(req.body.scores[j] - cookies[i].scores[j]))

            };

            console.log('differenceArray: ' + diffArray);

            for (let k = 0; k < diffArray.length; k++) {

                totalDiff += diffArray[k];

            }

            console.log('totalDiff: ' + totalDiff);


            cookies.push(req.body);
            res.json();
        }
    });

};
