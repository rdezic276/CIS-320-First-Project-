function clearTable() {
    $("#datatable tbody tr").empty();
}

function updateTable() {
    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result) {

        for (var i = 0; i < json_result.length; i++) {
            var id = json_result[i].id;
            var firstName = json_result[i].first;
            var lastName = json_result[i].last;
            var email = json_result[i].email;
            var phone = json_result[i].phone;
            var phoneDash = phone.substr(0,3) + '-' + phone.substr(3,3) + '-' + phone.substr(6,4);
            var birthday = json_result[i].birthday;

            var row ='<tr>';
            row += '<td>' + id + '</td>';
            row += '<td>' + firstName + '</td>';
            row += '<td>' + lastName + '</td>';
            row += '<td>' + email + '</td>';
            row += '<td>' + phoneDash + '</td>';
            row += '<td>' + birthday + '</td>';
            row += "<td><button type='button' name='delete' class='deleteButton btn' value='" + id + "'>Delete</button></td>";
            row += "<td><button type='button' name='edit' class='editButton btn' value='" + id + "'>Edit</button></td>";
            row += '</tr>';
            $('#datatable tbody').append(row);
        }
        var buttons = $(".deleteButton");
        buttons.on("click", deleteItem);
        var buttons = $(".editButton");
        buttons.on("click", editItem);

        console.log("Done");
    })
}

function deleteItem(e) {
    console.debug("Delete");
    console.debug(e.target.value);
    var url = "api/name_list_delete";
    var idValue = e.target.value
    var dataToServer = {id: idValue};

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling delete servlet");
        clearTable();
        updateTable();
        console.log(dataFromServer);
    })
}

function editItem(e) {
    console.debug("Edit");
    console.debug(e.target.value);
    console.log("Opening add item dialog");
    console.log(id);

    $('#id').val(e.target.value)
    $('#firstName').val(e.target.parentNode.parentNode.querySelectorAll("td")[1].innerHTML);
    $('#lastName').val(e.target.parentNode.parentNode.querySelectorAll("td")[2].innerHTML);
    $('#email').val(e.target.parentNode.parentNode.querySelectorAll("td")[3].innerHTML);
    $('#phone').val(e.target.parentNode.parentNode.querySelectorAll("td")[4].innerHTML);
    $('#birthday').val(e.target.parentNode.parentNode.querySelectorAll("td")[5].innerHTML);

    $('#firstNameDiv').removeClass("has-error");
    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#firstNameDiv').removeClass("has-success");
    $('#firstNameGlyph').removeClass("glyphicon-ok");

    $('#lastNameDiv').removeClass("has-error");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameDiv').removeClass("has-success");
    $('#lastNameGlyph').removeClass("glyphicon-ok");

    $('#emailDiv').removeClass("has-error");
    $('#emailGlyph').removeClass("glyphicon-remove");
    $('#emailDiv').removeClass("has-success");
    $('#emailGlyph').removeClass("glyphicon-ok");

    $('#phoneDiv').removeClass("has-error");
    $('#phoneGlyph').removeClass("glyphicon-remove");
    $('#phoneDiv').removeClass("has-success");
    $('#phoneGlyph').removeClass("glyphicon-ok");

    $('#birthdayDiv').removeClass("has-error");
    $('#birthdayGlyph').removeClass("glyphicon-remove");
    $('#birthdayDiv').removeClass("has-success");
    $('#birthdayGlyph').removeClass("glyphicon-ok");

    $('#myModal').modal('show');

}

function showDialogAdd() {

    console.log("Opening add item dialog");

    $('#firstName').val("");
    $('#lastName').val("");
    $('#email').val("");
    $('#phone').val("");
    $('#birthday').val("");

    $('#firstNameDiv').removeClass("has-error");
    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#firstNameDiv').removeClass("has-success");
    $('#firstNameGlyph').removeClass("glyphicon-ok");

    $('#lastNameDiv').removeClass("has-error");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameDiv').removeClass("has-success");
    $('#lastNameGlyph').removeClass("glyphicon-ok");

    $('#emailDiv').removeClass("has-error");
    $('#emailGlyph').removeClass("glyphicon-remove");
    $('#emailDiv').removeClass("has-success");
    $('#emailGlyph').removeClass("glyphicon-ok");

    $('#phoneDiv').removeClass("has-error");
    $('#phoneGlyph').removeClass("glyphicon-remove");
    $('#phoneDiv').removeClass("has-success");
    $('#phoneGlyph').removeClass("glyphicon-ok");

    $('#birthdayDiv').removeClass("has-error");
    $('#birthdayGlyph').removeClass("glyphicon-remove");
    $('#birthdayDiv').removeClass("has-success");
    $('#birthdayGlyph').removeClass("glyphicon-ok");

    $('#myModal').modal('show');
}

function jqueryPostButtonAction() {
    var valid_form = validation();
    if (valid_form == true) {
        console.log(valid_form);
        var url = "api/name_list_edit";
        var idValue = $("#id").val()
        var firstNameValue = $("#firstName").val()
        var lastNameValue = $("#lastName").val()
        var emailValue = $("#email").val()
        var phoneValue = $("#phone").val()
        var birthdayValue = $("#birthday").val()
        var dataToServer = {id: idValue,firstName: firstNameValue, lastName: lastNameValue, email: emailValue, phone: phoneValue, birthday:birthdayValue };

        $.post(url, dataToServer, function (dataFromServer) {
            console.log("Finished calling edit servlet.");
            clearTable();
            updateTable();
            $('#myModal').modal('hide');
            console.log(dataFromServer);
        });
    }
}

function saveChangesButton() {
    jqueryPostButtonAction();
}

function validation() {
    var firstNameValidate = $('#firstName').val();
    var lastNameValidate = $('#lastName').val();
    var emailValidate = $('#email').val();
    var phoneValidate = $('#phone').val();
    var birthdayValidate = $('#birthday').val();

    var firstNamereg = /^[A-Za-z-.']{1,45}$/;
    var lastNamereg = /^[A-Za-z-.']{1,45}$/;
    var emailreg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var phonereg = /^([0-9]{3})[-]([0-9]{3})[-]([0-9]{4})$/;
    var birthdayreg = /^\d{4}-\d{2}-\d{2}$/;

    var valid_form = true;

    if (firstNamereg.test(firstNameValidate)) {
        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameDiv').addClass("has-success");

        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('#firstNameGlyph').addClass("glyphicon-ok");

        $('firstNameStatus').val("(success)");

    }
    else {
        $('#firstNameDiv').removeClass("has-success");
        $('#firstNameDiv').addClass("has-error");

        $('#firstNameGlyph').removeClass("glyphicon-ok");
        $('#firstNameGlyph').addClass("glyphicon-remove");

        $('firstNameStatus').val("(error)");

        valid_form = false
    }

    if (lastNamereg.test(lastNameValidate)) {
        $('#lastNameDiv').removeClass("has-error");
        $('#lastNameDiv').addClass("has-success");

        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('#lastNameGlyph').addClass("glyphicon-ok");

        $('lastNameStatus').val("(success)");

    }
    else {
        $('#lastNameDiv').removeClass("has-success");
        $('#lastNameDiv').addClass("has-error");

        $('#lastNameGlyph').removeClass("glyphicon-ok");
        $('#lastNameGlyph').addClass("glyphicon-remove");

        $('lastNameStatus').val("(error)");

        valid_form = false
    }

    if (emailreg.test(emailValidate)) {
        $('#emailDiv').removeClass("has-error");
        $('#emailDiv').addClass("has-success");

        $('#emailGlyph').removeClass("glyphicon-remove");
        $('#emailGlyph').addClass("glyphicon-ok");

        $('emailStatus').val("(success)");

    }
    else {
        $('#emailDiv').removeClass("has-success");
        $('#emailDiv').addClass("has-error");

        $('#emailGlyph').removeClass("glyphicon-ok");
        $('#emailGlyph').addClass("glyphicon-remove");

        $('emailStatus').val("(error)");

        valid_form = false
    }

    if (phonereg.test(phoneValidate)) {
        $('#phoneDiv').removeClass("has-error");
        $('#phoneDiv').addClass("has-success");

        $('#phoneGlyph').removeClass("glyphicon-remove");
        $('#phoneGlyph').addClass("glyphicon-ok");

        $('phoneStatus').val("(success)");

    }
    else {
        $('#phoneDiv').removeClass("has-success");
        $('#phoneDiv').addClass("has-error");

        $('#phoneGlyph').removeClass("glyphicon-ok");
        $('#phoneGlyph').addClass("glyphicon-remove");

        $('phoneStatus').val("(error)");

        valid_form = false
    }


    if (birthdayreg.test(birthdayValidate)) {
        $('#birthdayDiv').removeClass("has-error");
        $('#birthdayDiv').addClass("has-success");

        $('#birthdayGlyph').removeClass("glyphicon-remove");
        $('#birthdayGlyph').addClass("glyphicon-ok");

        $('birthdayStatus').val("(success)");

    }
    else {
        $('#birthdayDiv').removeClass("has-success");
        $('#birthdayDiv').addClass("has-error");

        $('#birthdayGlyph').removeClass("glyphicon-ok");
        $('#birthdayGlyph').addClass("glyphicon-remove");

        $('birthdayStatus').val("(error)");

        valid_form = false
    }


    return valid_form;
}

updateTable();


var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

var savesButton = $('#saveChanges');
savesButton.on("click", saveChangesButton);