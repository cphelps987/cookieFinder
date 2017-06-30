
$(document).on("click", '#submit', function() {
    console.log("clicked");

//console.log("Bob")

    if ($('#name').val().trim() == '') {
        alert("Please Enter Your Name!");

    };

    let answerArray = [];

    for (let i = 1; i <= 10; i++) {
        //console.log("i", i)
        if ($("input:radio[name=q" + i + "]:checked").val() == null) {
            //alert("Survey not completed"); //works
            console.log("User did not finish survey")

        } else {
            answerArray.push($("input:radio[name=q" + i + "]:checked").val());
            console.log("User finished survey")
        }
    }; //end of loop

    //getting user input into an array to view in browser
    console.log("answer array", answerArray);

    //making input string into object to send via post
    var answerObject = {
        name: $('#name').val().trim(),
        scores: answerArray
    };
    //making sure the user input is validated and stored in an object along with the "score"
    console.log("answer object", answerObject);

});
  /*  var currentURL = window.location.origin;
    console.log(currentURL);

    //sending back the data to the serve via post calling it data

    $.post("/api", answerObject, function(data) {

        console.log("name:", data.name);
    });*/

    //clearing input data after it is posted to the server
/*

    $("#name").val('');
    $("input:radio").attr("checked", false);
*/


