const button = document.querySelector('sighup')
document.querySelector('#sighup').onclick = function(){
    const password = document.querySelector('#Password').value,
        cpassword = document.querySelector('#ConfirmPassword').value;

        if(password == ""){
            alert("Enter a password");
            return false
        }
        else if(password != cpassword){
            alert("password is incorrect");
            return false
        }

}
