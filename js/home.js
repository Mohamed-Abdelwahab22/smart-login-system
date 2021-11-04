

var userHello = document.getElementById("hello");

var logoutBtn = document.getElementById("LogoutId");

var user_data =  JSON.parse(localStorage.getItem("userData"));



if(!localStorage.getItem("TOKEN")){
    window.location.href = "index.html"
}

logoutBtn.addEventListener("click" , logout )

function logout(){

    localStorage.removeItem("TOKEN")

    window.location.href ="index.html";

}

for(var i = 0 ; i < user_data.length ; i++){

    userHello.innerHTML = `Welcome ${user_data[i].userName}`

}