function validateEmail(email) {
    const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const ok = regexp.test(email);
    if(!ok){
        $("#wrongEmail").html("Email er feil, inneholder feil");
        return false;
    }
    else {
        $("#wrongEmail").html("");
        return true;
    }
}

function validateUsername(username) {
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(username);
    if (!ok){
        $("#wrongUsername").html("Username is wrong, not valid");
        return false;
    }
    else {
        $("#wrongUsername").html("");
        return true;
    }
}

function validatePassword(password) {
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(password);
    if (!ok){
        $("#wrongPassword").html("Password is wrong");
        return false;
    }
    else {
        $("#wrongPassword").html("");
        return true;
    }
}