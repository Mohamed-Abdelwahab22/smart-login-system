
var userNameInput = document.getElementById("userNameId");
var userEmailInput = document.getElementById("userEmailId");
var userPassInput = document.getElementById("userPassId");
var userAlert = document.getElementById("userAlertId");
var signUpButton = document.getElementById("signupButtonId");


var userData = [];

var userNameCheck = /^[A-Z]+[a-z]+[0-9][0-9]?$/

var userEmailCheck = /^[A-Za-z]{3,10}[0-9]?[0-9]?[0-9]?(@)[a-z]{3,5}(\.)[a-z]{2,5}$/

var userPassCheck = /^(.){6,15}$/


signUpButton.addEventListener("click" , signUp );

function signUp(){

    var data = {
        userName : userNameInput.value,
        userEmail : userEmailInput.value,
        userPassword : userPassInput.value
    }

    if(userNameCheck.test(userNameInput.value) && userEmailCheck.test(userEmailInput.value) && userPassCheck.test(userPassInput.value)){

        userData.push(data)

        localStorage.setItem("userData" , JSON.stringify(userData))

        userAlert.classList.remove("text-danger");

        userAlert.classList.add("text-success");
    
        userAlert.innerHTML = "success";

        userNameInput.value = "";

        userEmailInput.value = "";

        userPassInput.value = "";
    }
    else if(userNameInput.value == "" || userNameInput.value == "" || userPassInput.value == ""){

        userAlert.classList.add("text-danger");

        userAlert.innerHTML = "All inputs is required";
    
    }
    else if(!userNameCheck.test(userNameInput.value)){
        userAlert.classList.add("text-danger");

        userAlert.innerHTML = "Please enter a valid user name";
    }
    else if(!userEmailCheck.test(userEmailInput.value)){
        userAlert.classList.add("text-danger");

        userAlert.innerHTML = "Please enter a valid email";
    }
    else if(!userPassCheck.test(userPassInput.value)){
        userAlert.classList.add("text-danger");

        userAlert.innerHTML = "Please enter a valid password";
    }

}
