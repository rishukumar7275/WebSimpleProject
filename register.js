/**
 * Created by Rishi on 25-Aug-17.
 */
function registrationValidation() {
    let firstname = document.getElementById('first_name');
    let lastname = document.getElementById('last_name');
    let email = document.getElementById('email');
    let mobile = document.getElementById('mobile');
    let password = document.getElementById('password');
    let select_profession = document.getElementById('select_profession');
    let confirmpassword = document.getElementById('confirmpassword');
    let mobilepattern = /^\d{10}$/
    let namereg = /^[A-Za-z]*$/;
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    /*if(firstname.value==="" || lastname.value===""){
        alert("Please fill all fields before submitting");
        return false;
    }*/
    if(firstname.value===""){
        document.getElementById('errorFirstName').innerHTML = "Name must be filled";
        errorFirstName.style.color = 'red';
        return false;
    }
        if(!namereg.test(firstname.value)){
            document.getElementById('errorFirstName').innerHTML = "Invalid Name";
            errorFirstName.style.color = 'red';
            return false;
        }
        else
            document.getElementById('errorFirstName').innerHTML = "";
    if(lastname.value===""){
        document.getElementById('errorLastName').innerHTML = "Name must be filled";
        errorLastName.style.color = 'red';
        return false;
    }
        if(!namereg.test(lastname.value)){
            document.getElementById('errorLastName').innerHTML = "Invalid Name";
            errorLastName.style.color = 'red';
            return false;
        }
        else
            document.getElementById('errorLastName').innerHTML = "";
    if(email.value===""){
        document.getElementById('errorEmail').innerHTML = "Email Id must be filled";
        errorEmail.style.color = 'red';
        return false;
    }
        if (!pattern.test(email.value)) {
            document.getElementById('errorEmail').innerHTML = "Mail ID must be in abc@xyz.com format only";
            errorEmail.style.color = 'red';
            return false;
        }
        else
            document.getElementById('errorEmail').innerHTML = "";
    if(mobile.value===""){
        document.getElementById('errorMobile').innerHTML = "Phone Number must be filled";
        errorMobile.style.color = 'red';
        return false;
    }
        if (!mobilepattern.test(mobile.value)) {
            document.getElementById('errorMobile').innerHTML = "Phone Number should be in proper format only";
            errorMobile.style.color = 'red';
            return false;
        }
        else
            document.getElementById('errorMobile').innerHTML = "";
    if(password.value===""){
        document.getElementById('errorPassword').innerHTML = "Enter Password";
        errorPassword.style.color = 'red';
        return false;
    }
        if (!passwordpattern.test(password.value)) {
            document.getElementById('errorPassword').innerHTML = "Password contains uppercase,lowercase,number and one special character at least\n Password be at least 8 character long ";
            errorPassword.style.color = 'red';
            return false;
        }
        else
            document.getElementById('errorPassword').innerHTML = "";
    if(confirmpassword.value===""){
        document.getElementById('errorConfirmPassword').innerHTML = "Password must be match";
        errorConfirmPassword.style.color = 'red';
        return false;
    }
        if(confirmpassword.value !== password.value){
            alert("Password does not matched");
            confirmpassword.focus();
            return false;
        }
        else
            document.getElementById('errorConfirmPassword').innerHTML = "";
    if(select_profession.value === "-1"){
        document.getElementById('errorSelect').innerHTML = "Select your profession";
        errorSelect.style.color = 'red';
        errorSelect.style.margin = "0px";
        select_profession.focus();
        return false
    }
    else
        document.getElementById('errorSelect').innerHTML = "";

        document.getElementById("registerform").reset();
        swal('Registration Successful', 'Congrats !' , 'success');
        return false;
}
function navigateToHome() {
    document.location.href = '../index.html';
}