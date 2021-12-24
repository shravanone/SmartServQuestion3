function verifypassword()
{   
    var password = document.getElementById("password").value;
    console.log(password)
    const pattern = /^(?=.*\d)(?=.*[@])(?=.*[a-z])(?=.*[A-Z]).{3,}$/;
    if(password.match(pattern)){
        return false;
    }
    else{
        message.innerHTML = "Password must contain an uppercase letter and a number and @ symbol";
        message.style.color = "red";
        message.style.display = "block";
    }
}
function validate()
{
    var form = document.getElementById("form");
    var username = document.getElementById("username").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    message = document.getElementById("message");

    if (username.match(pattern))
    {
        verifypassword();
    }
    else{
        message.innerHTML = "Please enter a valid email address";
        message.style.color = "red";
        message.style.display = "block";
    }
}