/**
 * Created by Rishi on 21-Aug-17.
 */

function check() {
    let uname = document.getElementById('login_username');
    let pwd = document.getElementById('login_password');
    let username = "rishi";
    let pass = 1234;
    if(uname.value===username){
        if(pwd.value==pass){
            return true;
        }
        else{
            document.getElementById('msg').innerHTML = "Incorrect Password"
            msg.style.color = 'red';
            return false;
        }
    }
    else{
        document.getElementById('msg').innerHTML = "Invalid Data"
        msg.style.color = 'red';
        return false;
    }
}