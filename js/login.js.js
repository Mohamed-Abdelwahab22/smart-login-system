
var logInButton = document.getElementById("loginButtonId");
var loginEmailInput = document.getElementById("loginEmailId");
var loginPassInput = document.getElementById("loginPassId");
var userAlert = document.getElementById("userAlertId");

var user_data =  JSON.parse(localStorage.getItem("userData"));



logInButton.addEventListener("click" , login )

function login(){

    token = Math.floor(1000000000000000 + Math.random() * 9000000000000000)
    .toString(36).substr(0, 10);

    localStorage.setItem("TOKEN" , JSON.stringify(token))

    
    for(var i = 0 ; i < user_data.length ; i++){

        if(localStorage.getItem("TOKEN")){

            if(user_data[i].userEmail == loginEmailInput.value && user_data[i].userPassword == loginPassInput.value){
            
                window.location.href = "home.html";
         
             }
             else{
     
                 userAlert.innerHTML = "incorrect email or password";
     
             }

        }else if(!localStorage.getItem("TOKEN")){
            window.location.href = "index.html"
        }

        
    
    }

}