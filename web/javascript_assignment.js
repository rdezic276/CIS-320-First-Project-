/**
 * Created by Rasim Dezic on 1/19/2017.
 */
function hello(event) {
    console.log("Hello");
}
var formButton1 = $('#button1');
formButton1.on("click", hello);



function addNumbers() {
    var numberOne = $('#field1').val();
    var numberTwo = $('#field2').val();
    var variable3 = parseInt(numberOne) + parseInt(numberTwo);
    $('#field3').val(variable3);
}
var formButton2 = $('#button2');
formButton2.on("click", addNumbers);



function hideFunction(event) {


if ($('#paragraphToHide').is(':hidden')) {
    $('#paragraphToHide').show();
} else {
    $('#paragraphToHide').hide();
}
}
var formButton3 = $('#button3');
formButton3.on("click", hideFunction);



function validationFunction(event) {
    var userInput = $('#phoneField').val();
    var reg = /^([0-9]{3})[-]([0-9]{3})[-]([0-9]{4})$/;

        if (reg.test(userInput)) {
     console.log("Ok");
     }
     else {
     console.log("Bad");
     }
}
var formButton4 = $('#button4');
formButton4.on("click", validationFunction);


function jsonFunction(event) {

    // Create an empty object
    var formObject = {};

    // Set a field in the object to the value in this form field
    formObject.firstName = $('#firstName').val();
    formObject.lastName = $('#lastName').val();
    formObject.email = $('#email').val();


    // Build the JSON string based on that object's fields
    var jsonString = JSON.stringify(formObject);

    // Set a field to the JSON result so we can see it.
    console.log(jsonString);
}

// Attach an action to a button click
var formButton5 = $('#button5');
formButton5.on("click", jsonFunction);



