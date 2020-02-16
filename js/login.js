var subV = document.getElementById("submit")
var emailV = document.getElementById("mail")
var passV = document.getElementById("pass")
var err = document.getElementById("err")

var login = function (e) {
    e.preventDefault();
    if ( emailV.value=="admin@iti.com" && passV.value=="123456" ){
        location.href="../html/admin.html"
    }else{
        err.textContent="Check your email and password"
        err.style.visibility="visible"
    }
}

subV.addEventListener("click",login)