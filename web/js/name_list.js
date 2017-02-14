
var url = "api/name_list_get";
function updateTable() {


    $.getJSON(url, null, function (json_result) {
        // json_result is an object. You can set a breakpoint, or print
        // it to see the fields. Specifically, it is an array of objects.
        // Here we loop the array and print the first name.
        for (var i = 0; i < json_result.length; i++) {
            console.log(json_result[i].first);

            json_result[i].phone = json_result[i].phone.substring(0,3) + "-" + json_result[i].phone.substring(3,6) + "-" + json_result[i].phone.substring(6,15);

            $('#datatable tbody').append("<tr><td>" + json_result[i].id + "</td>" +
                "<td>" + json_result[i].first + "</td>" +
                "<td>" + json_result[i].last + "</td>" +
                "<td>" + json_result[i].email + "</td>" +
                "<td>" + json_result[i].phone + "</td>" +
                "<td>" + json_result[i].birthday + "</td></tr>")
        }

    })

}
var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

function showDialogAdd() {

    // Print that we got here
    console.log("Opening add item dialog");

    // Clear out the values in the form.
    // Otherwise we'll keep values from when we last
    // opened or hit edit.
    // I'm getting it started, you can finish.
    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#email').val("");
    $('#phone').val("");
    $('#birthday').val("");
    $('#firstNameDiv').removeClass("has-error");
    $('#firstNameDiv').removeClass("has-success");
    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#firstNameGlyph').removeClass("glyphicon-ok");

    $('#lastNameDiv').removeClass("has-error");
    $('#lastNameDiv').removeClass("has-success");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameGlyph').removeClass("glyphicon-ok");

    $('#emailDiv').removeClass("has-error");
    $('#emailDiv').removeClass("has-success");
    $('#emailGlyph').removeClass("glyphicon-remove");
    $('#emailGlyph').removeClass("glyphicon-ok");

    $('#phoneDiv').removeClass("has-error");
    $('#phoneDiv').removeClass("has-success");
    $('#phoneGlyph').removeClass("glyphicon-remove");
    $('#phoneGlyph').removeClass("glyphicon-ok");

    $('#birthdayDiv').removeClass("has-error");
    $('#birthdayDiv').removeClass("has-success");
    $('#birthdayGlyph').removeClass("glyphicon-remove");
    $('#birthdayGlyph').removeClass("glyphicon-ok");


    // Show the hidden dialog
    $('#myModal').modal('show');
}
updateTable();

function saveChanges() {
    val();
}
var saveChangeButton = $('#saveChanges');
saveChangeButton.on("click", saveChanges);

function val() {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var birthday = $('#birthday').val();
    var nameReg = /^[A-Za-z-.']{1,45}$/;
    var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phoneReg = /^([0-9]{3})[-]([0-9]{3})[-]([0-9]{4})$/;
    var birthdayReg = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

    if (nameReg.test(firstName)) {
        // Set style for outline of form field
        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameDiv').addClass("has-success");

// Set the icon for the form field
        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('#firstNameGlyph').addClass("glyphicon-ok");

// Put in the field used by screen readers
        $('#firstNameStatus').val("(success)");
    }
    else {
        // Set style for outline of form field
        $('#firstNameDiv').removeClass("has-success");
        $('#firstNameDiv').addClass("has-error");

// Set the icon for the form field
        $('#firstNameGlyph').removeClass("glyphicon-ok");
        $('#firstNameGlyph').addClass("glyphicon-remove");

// Put in the field used by screen readers
        $('#firstNameStatus').val("(success)");
    }
    if (nameReg.test(lastName)) {
        // Set style for outline of form field
        $('#lastNameDiv').removeClass("has-error");
        $('#lastNameDiv').addClass("has-success");

// Set the icon for the form field
        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('#lastNameGlyph').addClass("glyphicon-ok");

// Put in the field used by screen readers
        $('#lastNameStatus').val("(success)");
    }
    else {
        // Set style for outline of form field
        $('#lastNameDiv').removeClass("has-success");
        $('#lastNameDiv').addClass("has-error");

// Set the icon for the form field
        $('#lastNameGlyph').removeClass("glyphicon-ok");
        $('#lastNameGlyph').addClass("glyphicon-remove");

// Put in the field used by screen readers
        $('#lastNameStatus').val("(success)");
    }

    if (emailReg.test(email)) {
        // Set style for outline of form field
        $('#emailDiv').removeClass("has-error");
        $('#emailDiv').addClass("has-success");

// Set the icon for the form field
        $('#emailGlyph').removeClass("glyphicon-remove");
        $('#emailGlyph').addClass("glyphicon-ok");

// Put in the field used by screen readers
        $('#emailStatus').val("(success)");
    }
    else {
        // Set style for outline of form field
        $('#emailDiv').removeClass("has-success");
        $('#emailDiv').addClass("has-error");

// Set the icon for the form field
        $('#emailGlyph').removeClass("glyphicon-ok");
        $('#emailGlyph').addClass("glyphicon-remove");

// Put in the field used by screen readers
        $('#emailStatus').val("(success)");
    }

    if (phoneReg.test(phone)) {
        // Set style for outline of form field
        $('#phoneDiv').removeClass("has-error");
        $('#phoneDiv').addClass("has-success");

// Set the icon for the form field
        $('#phoneGlyph').removeClass("glyphicon-remove");
        $('#phoneGlyph').addClass("glyphicon-ok");

// Put in the field used by screen readers
        $('#phoneStatus').val("(success)");
    }
    else {
        // Set style for outline of form field
        $('#phoneDiv').removeClass("has-success");
        $('#phoneDiv').addClass("has-error");

// Set the icon for the form field
        $('#phoneGlyph').removeClass("glyphicon-ok");
        $('#phoneGlyph').addClass("glyphicon-remove");

// Put in the field used by screen readers
        $('#phoneStatus').val("(success)");
    }

    if (birthdayReg.test(birthday)) {
        // Set style for outline of form field
        $('#birthdayDiv').removeClass("has-error");
        $('#birthdayDiv').addClass("has-success");

// Set the icon for the form field
        $('#birthdayGlyph').removeClass("glyphicon-remove");
        $('#birthdayGlyph').addClass("glyphicon-ok");

// Put in the field used by screen readers
        $('#birthdayStatus').val("(success)");
    }
    else {
        // Set style for outline of form field
        $('#birthdayDiv').removeClass("has-success");
        $('#birthdayDiv').addClass("has-error");

// Set the icon for the form field
        $('#birthdayGlyph').removeClass("glyphicon-ok");
        $('#birthdayGlyph').addClass("glyphicon-remove");

// Put in the field used by screen readers
        $('#birthdayStatus').val("(success)");
    }


}
