function telefonError(strng){
    error = "";
    let newstrng = strng.replace( /[\(\)\.\-\ ]/g ,'' );
    let filter = /^\d+$/;
    if(!filter.test(newstrng)) {
    error = "Kérem adjon meg érvényes telefonszámot!\n";
    }
    return error;
}

function emailEllenor(strng) 
{
    error = "";
    let filter = /^.+@.+\..{2,6}$/;
    if(!filter.test(strng)) {
    error = "Kérem adjon meg érvényes e-mail címet!\n";
    }
    return error;
}

function ellenor(){
    let telefon = document.forms["urlap"]["tel"].value;
    let email = document.forms["urlap"]["mail"].value;
    let telError = telefonError(telefon);
    if (telError){
        alert(telError);
        return false;
    }
    else{
        let telEredmeny = document.getElementById("telEredmeny");
        telEredmeny.innerHTML = "A megadott telefonszám érvényes.",  telEredmeny
        return false;
    }


    let emailError = emailError(email);
    if (emailError){
        alert(emailError);
        return false;
    }
    else{
        let telEredmeny = document.getElementById("telEredmeny");
        telEredmeny.innerHTML = "A megadott email érvényes.",  telEredmeny
        return false;
    }

}

