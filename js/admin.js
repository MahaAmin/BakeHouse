var sub = document.getElementById("submit")
var typec = document.getElementById("type")
var titlec = document.getElementById("title")
var img = document.getElementById("img")
var desc = document.getElementById("desc")
var errMessage = document.getElementById("err")
var successMessage = document.getElementById("success")
sub.addEventListener("click",function(e){
    e.preventDefault();
    err.innerHTML=""
    successMessage.textContent=""
    var chkErr =false;
    var err="<ul>"
    console.log(img.value);
    if (titlec.value.length == 0){
        err+="<li>Title can\'t be Empty</li>"
        chkErr=true
    }
    if (!img.value){
        err+="<li>Must Chose Image</li>"
        chkErr=true
    }
    if (desc.value.length == 0){
        err+="<li>Description can\'t be Empty</li>"
        chkErr=true
    }
    err+="</ul>"
    if (chkErr){
        errMessage.innerHTML = err
    }else{
        var obj = {
            title: titlec.value,
            img: img.value,
            desc: desc.value
        }

        if (localStorage.getItem(`${typec.value}`)){
            var arr = JSON.parse(localStorage.getItem(`${typec.value}`))
        }else{
            var arr = []
        }

        arr.push(obj)
        localStorage.setItem(`${typec.value}`,JSON.stringify(arr))
        successMessage.textContent="Done"
        titlec.value=""
        img.value=""
        desc.value=""
    }
    
})
