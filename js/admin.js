var sub = document.getElementById("submit")
var typec = document.getElementById("type")
var titlec = document.getElementById("title")
var img = document.getElementById("img")
var desc = document.getElementById("desc")
var errMessage = document.getElementById("err")
var successMessage = document.getElementById("success")

var selectedImagePath=""
var picFile = ""
img.addEventListener("change",function(e){
    document.getElementById("noFile").textContent=e.target.files[0].name
    var picReader = new FileReader();    
    picReader.addEventListener("load", readerLoad);

    function readerLoad(event) {
        picFile = event.target.result;
        console.log("inside ",picFile);
        
    }
    var file = e.target.files[0];
    //Read the image
    picReader.readAsDataURL(file);
    
})

sub.addEventListener("click",function(e){

    e.preventDefault();
    errMessage.innerHTML=""
    errMessage.style.visibility="hidden"
    successMessage.textContent=""
    successMessage.style.visibility="hidden"
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
        errMessage.style.visibility="visible"
    }else{
        console.log("hahah ",picFile);
        
        var obj = {
            title: titlec.value,
            img: picFile,
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
        successMessage.style.visibility="visible"
        titlec.value=""
        img.value=""
        desc.value=""
        document.getElementById("noFile").textContent="No images chosen..."
    }
})
