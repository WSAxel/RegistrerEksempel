function registering() {
    const emailOK = validateEmail($("#email").val());
    const usernameOK = validateUsername($("#username").val());
    const passwordOK = validatePassword($("#password").val());
    if (emailOK && usernameOK && passwordOK){
        save();
    }
}
function save() {
    const person = {
        email: $("#email").val(),
        username: $("#username").val(),
        password: $("#password").val()
    };
    
    $.post("/saveLogins", person, function () {
        getLogins();
    });
    $("#email").val("");
    $("#username").val("");
    $("#password").val("");
}

function getLogins() {
    $.get("/getLogins", function (logins) {
        formatData(logins);
    });

    function formatData(logins) {
        let ut = "<table><tr><th>Email</th><th>Username</th><th>Password</th></tr>"
        for(const log of logins){
            ut+= "<tr><td>"+log.email+"</td><td>"+log.username+"</td><td>"+log.password+"</td></tr>";
        }
        ut+= "</table>";
        $("#theRegistrations").html(ut);
    }
}

function deleteLogins() {
    $.get("/deleteLogins", function () {
        getLogins();
    })
}